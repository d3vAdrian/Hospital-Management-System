import Product from "../models/Product.js";
import ProductStat from "../models/productStat.js";
import User from "../models/user.js";
import Reserve from "../models/reserve.js";
import Transaction from "../models/transaction.js";
import getCountryIso3 from "country-iso-2-to-3";
import Appointment from "../models/appointment.js";
import mongoose from "mongoose";

export const getProduct = async (req, res) => {
  try {
    const products = await Product.find();
    
    const productsWithStats = await Promise.all(
      products.map(async (product) => {
        const stat = await ProductStat.find({
          productId: product._id,
        });
        return {
          ...product._doc,
          stat,
        };
      })
    );

    res.status(200).json(productsWithStats);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getCustomers = async (req, res) => {
  try {
    const customers = await User.find({ role: "user" }).select("-password");
    res.status(200).json(customers);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const getDoctors = async (req, res) => {
  try {
    const customers = await User.find({ role: "admin" }).select("-password");
    res.status(200).json(customers);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getTransactions = async (req, res) => {
  try {
    // sort should look like this: { "field": "userId", "sort": "desc"}
    const { page = 1, pageSize = 20, sort = null, search = "" } = req.query;

    // formatted sort should look like { userId: -1 }
    const generateSort = () => {
      const sortParsed = JSON.parse(sort);
      const sortFormatted = {
        [sortParsed.field]: (sortParsed.sort = "asc" ? 1 : -1),
      };

      return sortFormatted;
    };
    const sortFormatted = Boolean(sort) ? generateSort() : {};

    const transactions = await Transaction.find({
      $or: [
        { cost: { $regex: new RegExp(search, "i") } },
        { userId: { $regex: new RegExp(search, "i") } },
      ],
    })
      .sort(sortFormatted)
      .skip(page * pageSize)
      .limit(pageSize);

    const total = await Transaction.countDocuments({
      name: { $regex: search, $options: "i" },
    });

    res.status(200).json({
      transactions,
      total,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getGeography = async (req, res) => {
  try {
    const users = await User.find();

    const mappedLocations = users.reduce((acc, { country }) => {
      const countryISO3 = getCountryIso3(country);
      if (!acc[countryISO3]) {
        acc[countryISO3] = 0;
      }
      acc[countryISO3]++;
      return acc;
    }, {});

    const formattedLocations = Object.entries(mappedLocations).map(
      ([country, count]) => {
        return { id: country, value: count };
      }
    );

    res.status(200).json(formattedLocations);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const assign = async (req, res)=>{
  try {
      const {
        doctor,
        patient,
        title,
        priority,
        session,
        task,
        description,
        date
        } = req.body;

        const newAppt = new Appointment({
          _id: new mongoose.Types.ObjectId(), 
          doctor,
          patient,
          title,
          priority,
          session,
          task,
          description,
          date
        });
        const savedAppt = await newAppt.save();
        res.status(201).json(savedAppt);
  } catch (err) {
      res.status(500).json({ error: err.message });
  }
}
export const addProduct = async (req, res)=>{
  try {
      const {
          name,
          price,
          volume,
          manufacturer,
          category,
          reorderLevel,
          measurement,
          currency,
          quantity,
          reorderCount,
          description,
          rating,
          Date,
        } = req.body;

        const newProduct = new Product({
          _id: new mongoose.Types.ObjectId(), 
          name,
          price,
          volume,
          manufacturer,
          category,
          reorderLevel,
          measurement,
          currency,
          quantity,
          reorderCount,
          description,
          rating,
          Date,
        });
        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
  } catch (err) {
      res.status(500).json({ error: err.message });
  }
}
export const reserve = async (req, res)=>{
  try {
      const {
        email,
        firstName,
        lastName,
        plan,
        ward,
        BedName,
        description,
        durationDate,
        Date
        } = req.body;

        const newReserve = new Reserve({
          _id: new mongoose.Types.ObjectId(), 
          email,
          firstName,
          lastName,
          plan,
          ward,
          BedName,
          description,
          durationDate,
          Date
        });
        const savedReserve = await newReserve.save();
        res.status(201).json(savedReserve);
  } catch (err) {
      res.status(500).json({ error: err.message });
  }
}