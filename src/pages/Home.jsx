import React, { useState } from "react";
import Footer from "../Footer.jsx";
import { followers } from "../data/followers.json";
import { overviews } from "../data/overviews.json";
import FollowersCard from "../components/FollowersCard.jsx";
import OverviewCard from "../components/OverviewCard.jsx";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

const Home = () => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  const lightTheme = createTheme({
    palette: {
      mode: "light",
    },
  });

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <main
        className={`background_box relative z-10 min-h-screen ${
          theme === "dark"
            ? "background_box_dark bg-[#1D2029]"
            : "background_box_light bg-[#FFFFFF]"
        } transition-colors`}
      >
        <div className="container mx-auto">
          <div className="mx-[2em] py-10 lg:mx-[4em] xl:mx-[10em] ">
            <div className="mb-10 md:flex md:items-center md:justify-between">
              <div>
                <h1
                  className={`text-2xl font-bold ${
                    theme === "dark" ? "text-[#fff]" : "text-[#000]"
                  } transition-colors lg:text-3xl`}
                >
                  Social Media Dashboard
                </h1>
                <p
                  className={`font-bold ${
                    theme === "dark" ? "text-[#8b97c6]" : "text-[#63687e]"
                  } transition-colors`}
                >
                  Total Followers: 23,004
                </p>
              </div>
              <hr
                className={`my-5 lg:hidden ${
                  theme === "dark" ? "border-[#373A4D]" : "border-[#898C9B]"
                } transition-colors`}
              />
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center">
                  <span
                    className={`font-bold ${
                      theme === "dark" ? "text-[#fff]" : "text-[#000]"
                    } transition-colors `}
                  >
                    {theme === "dark" ? "Dark Mode" : "Light Mode"}
                  </span>
                  <Switch
                    checked={theme === "dark"}
                    onChange={toggleTheme}
                    color="primary"
                    sx={{
                      width: "4.3em",
                      height: "2.9em",
                      
                      "& .MuiSwitch-track": {
                        borderRadius: 30,
                        background:
                          theme === "dark"
                            ? "linear-gradient(to right, #00ff00, #000000)"
                            : "#bdbdbd",
                      },
                    }}
                    icon={
                      <WbSunnyIcon
                        style={{
                          color: theme === "dark" ? "#ff8c00" : "#ff9800",
                          fontSize: "29",
                        }}
                      />
                    }
                    checkedIcon={
                      <Brightness4Icon
                        style={{
                          color: theme === "dark" ? "#1e88e5" : "#ff9800",
                          fontSize: "29",
                        }}
                      />
                    }
                  />
                </div>
              </div>
            </div>

            <div className="grid_auto_fit grid gap-5">
              {followers.map((follower, index) => (
                <FollowersCard
                  key={index}
                  number={index}
                  Theme={theme}
                  {...follower}
                />
              ))}
            </div>
            <h2
              className={`mb-6 mt-10 text-2xl font-bold ${
                theme === "dark" ? "text-[#fff]" : "text-[#636677]"
              } transition-colors`}
            >
              Overview - Today
            </h2>

            <div className="grid_auto_fit_overview 2xl:grid_auto_fit_overview_large grid gap-5">
              {overviews.map((overview, index) => (
                <OverviewCard
                  key={index}
                  number={index}
                  Theme={theme}
                  {...overview}
                />
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer Theme={theme} />
    </ThemeProvider>
  );
};

export default Home;
