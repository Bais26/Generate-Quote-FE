import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Mendefinisikan tipe state yang akan dikelola di Redux
interface QuoteState {
  Judul: string;
  Quote: string;
  status: "idle" | "loading" | "succeeded" | "failed";
}

// Inisialisasi state
const initialState: QuoteState = {
  Judul: "",
  Quote: "",
  status: "idle",
};

// Mendefinisikan action async untuk mendapatkan kutipan acak dari API
export const fetchRandomQuote = createAsyncThunk(
  "quotes/fetchRandomQuote",
  async (): Promise<{  judul: string , konten: string }> => {
    const response = await axios.get("http://localhost:5000/api/quote");
    return response.data;
  }
);

const quoteSlice = createSlice({
  name: "quotes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRandomQuote.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchRandomQuote.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.Judul = action.payload.judul;
        state.Quote = action.payload.konten;
      })
      .addCase(fetchRandomQuote.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default quoteSlice.reducer;
