import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer 0AWAjPnWWLLzgSpYn_7rMYCYSUcEpn3nn_Bhlq40tns5FtnckfNWkpimANIMhwoz4Dz6VvXztvZ9S9l9rzWw3z31sH23H_QofMlhq1EwrsdL3boft7071dP_6ZG8YHYx",
  },
});
