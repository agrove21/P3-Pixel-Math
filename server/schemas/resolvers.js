const { User, Pixel } = require("../model");
const { signToken } = require("../utils/auth");
const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select("-__v -password")
          .populate("pixels");
        return userData;
      }
      throw new Error("Not logged in");
    },
    pixels: async () => {
      const pixels = await Pixel.find();
      return pixels;
    },
    pixel: async (parent, { pixelId }) => {
      const pixel = await Pixel.findOne({ _id: pixelId });
      return pixel;
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user._id);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email }).populate("pixels");
      if (!user) {
        return "No user with this email!";
      }
      const correctPw = await user.comparePassword(password);
      if (!correctPw) {
        return "Incorrect credentials!";
      }
      const token = signToken(user._id);
      return { token, user };
    },
    addPixel: async (parent, args, context) => {
      if (context.user) {
        const pixel = await Pixel.create(args);
        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { pixels: pixel._id } }
        );
        return pixel;
      }
    },
    removePixel: async (parent, { pixelId }, context) => {
      if (context.user) {
        const pixel = await Pixel.findOneAndDelete({ _id: pixelId });
        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $pull: { pixels: pixelId } }
        );
        return pixel;
      }
    },
  },
};
module.exports = resolvers;