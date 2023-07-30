import mongoose from "mongoose";
import User from "../models/user.js";
import Bed from "../models/bed.js";
import Transaction from "../models/transaction.js";
import OverallStat from "../models/OverallStats.js";

export const getAdmins = async (req, res) => {
  try {
    const admins = await User.find({ role: "admin" }).select("-password");
    res.status(200).json(admins);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const getWard = async (req, res) => {
  try {
    // const wardName = "test45"; // Specify the ward name you want to search for
    const wardName = req.body.ward;
    
    // Find beds with the specified ward name
    const beds = await Bed.find({ ward: wardName });
    const wards = await Bed.find();
    // const beds = await Bed.find();

    if (beds.length === 0) {
      return res.status(404).json({ message: 'No beds found for the specified ward' });
    }

    res.status(200).json({beds ,wards});
} catch (err) {
    res.status(500).json({ error: err.message });
}
};
// add bed to db
// export const getBed = async (req, res) => {
//   try {
//     const {
//       name,
//       ward
//       } = req.body;
//       const newBed = new Bed({
//         _id: new mongoose.Types.ObjectId(),
//         name,
//         ward
//       });
//       const savedBed = await newBed.save();
//       res.status(201).json(savedBed);
// } catch (err) {
//     res.status(500).json({ error: err.message });
// }
// };
export const getAppt = async (req, res) => {
  try {
    const doctors = await User.find({ role: "doctor" }).select("-password");
    const patients = await User.find({ role: "patient" }).select("-password");
    
    const responseData = {
      doctors,
      patients
    };

    res.status(200).json(responseData);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getPatients = async (req, res) => {
  try {
    // hardcoded values
    const currentMonth = "November";
    const currentYear = 2021;
    const currentDay = "2021-11-15";

    const patients = await User.find({ role: "patient" }).select("-password");
    
    /* Recent Transactions */
    const transactions = await Transaction.find()
      .limit(50)
      .sort({ createdOn: -1 });

    /* Overall Stats */
    const overallStat = await OverallStat.find({ year: currentYear });

    const {
      totalCustomers,
      yearlyTotalSoldUnits,
      yearlySalesTotal,
      monthlyData,
      salesByCategory,
    } = overallStat[0];

    const thisMonthStats = overallStat[0].monthlyData.find(({ month }) => {
      return month === currentMonth;
    });

    const todayStats = overallStat[0].dailyData.find(({ date }) => {
      return date === currentDay;
    });

    res.status(200).json({
          totalCustomers,
          yearlyTotalSoldUnits,
          yearlySalesTotal,
          monthlyData,
          salesByCategory,
          thisMonthStats,
          todayStats,
          transactions,
          patients
    })
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const getBeds = async (req, res) => {
  try {
    // hardcoded values
    const currentMonth = "November";
    const currentYear = 2021;
    const currentDay = "2021-11-15";

    const beds = await Bed.find();
    
    /* Recent Transactions */
    const transactions = await Transaction.find()
      .limit(50)
      .sort({ createdOn: -1 });

    /* Overall Stats */
    const overallStat = await OverallStat.find({ year: currentYear });

    const {
      totalCustomers,
      yearlyTotalSoldUnits,
      yearlySalesTotal,
      monthlyData,
      salesByCategory,
    } = overallStat[0];

    const thisMonthStats = overallStat[0].monthlyData.find(({ month }) => {
      return month === currentMonth;
    });

    const todayStats = overallStat[0].dailyData.find(({ date }) => {
      return date === currentDay;
    });

    res.status(200).json({
          totalCustomers,
          yearlyTotalSoldUnits,
          yearlySalesTotal,
          monthlyData,
          salesByCategory,
          thisMonthStats,
          todayStats,
          transactions,
          beds
    })
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const getDoctors = async (req, res) => {
  try {
    // hardcoded values
    const currentMonth = "November";
    const currentYear = 2021;
    const currentDay = "2021-11-15";

    const doctors = await User.find({ role: "doctor" }).select("-password");
    
    /* Recent Transactions */
    const transactions = await Transaction.find()
      .limit(50)
      .sort({ createdOn: -1 });

    /* Overall Stats */
    const overallStat = await OverallStat.find({ year: currentYear });

    const {
      totalCustomers,
      yearlyTotalSoldUnits,
      yearlySalesTotal,
      monthlyData,
      salesByCategory,
    } = overallStat[0];

    const thisMonthStats = overallStat[0].monthlyData.find(({ month }) => {
      return month === currentMonth;
    });

    const todayStats = overallStat[0].dailyData.find(({ date }) => {
      return date === currentDay;
    });

    res.status(200).json({
          totalCustomers,
          yearlyTotalSoldUnits,
          yearlySalesTotal,
          monthlyData,
          salesByCategory,
          thisMonthStats,
          todayStats,
          transactions,
          doctors
    })
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getUserPerformance = async (req, res) => {
  try {
    // const { id } = req.params;
    const { id } = req.params;


    const userWithStats = await User.aggregate([
      { $match: { _id: new mongoose.Types.ObjectId(id) } },
      {
        $lookup: {
          from: "affiliatestats",
          localField: "_id",
          foreignField: "userId",
          as: "affiliateStats",
        },
      },
      { $unwind: "$affiliateStats" },
    ]);

    const saleTransactions = await Promise.all(
      userWithStats[0].affiliateStats.affiliateSales.map((id) => {
        return Transaction.findById(id);
      })
    );
    const filteredSaleTransactions = saleTransactions.filter(
      (transaction) => transaction !== null
    );

    res
      .status(200)
      .json({ user: userWithStats[0], sales: filteredSaleTransactions });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
