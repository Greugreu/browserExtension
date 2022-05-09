import axios from "axios";

const api = "https://chympy.net/api/articles";
const loading = document.querySelector(".loading");
const errors = document.querySelector(".errors");
const data = document.querySelector(".data");