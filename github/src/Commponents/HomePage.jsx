import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { followerFunc, userFunc } from "../ReduxFiles/action";
import FollowersRepo from "./FollowersRepo";
import style from "./Home.module.css";

const HomePage = () => {
  const [user, setUser] = useState("");
  // const [data, setData] = useState([]);
  // const [follwers, setFollwers] = useState([]);
  const [repo, setRepo] = useState({});
  const [status, setStatus] = useState(false);

  const dispatch = useDispatch();
  const data = useSelector((state) => state.reducer.repos);
  const loading = useSelector((state) => state.reducer.loading);
  const error = useSelector((state) => state.reducer.error);
  const followers = useSelector((state) => state.reducer.followers);
  //status change:-->
  const [dataStatus, setDataStatus] = useState(false);
  const [follwerStatus, setFollowerStatus] = useState(false);
  const [repoStatus, setRepoStatus] = useState(false);

  const [userData, setUserData] = useState([]);

  useEffect(() => {
    console.log("ABCD");
    if (data == []) {
      var userRepos = JSON.parse(localStorage.getItem("USER_REPOS"));
      console.log(userRepos);
      setUserData(userRepos);
    }
  }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User:", user);

    dispatch(userFunc(user));
    dispatch(followerFunc(user));
    // axios
    //   .get(`https://api.github.com/users/${user}/repos`)
    //   .then((res) => {
    //     console.log("res:", res);
    //     setData(res.data);
    //   })
    //   .then((err) => console.log("Error:", err));
    setDataStatus(true);
    setFollowerStatus(false);
    setRepoStatus(false);
    setStatus(true);
  };

  const handleFollowers = () => {
    // axios.get(data[0]?.owner?.followers_url).then((res) => {
    //   console.log("folowersRes:", res);
    //   setFollwers(res.data);
    // });
    setDataStatus(false);
    setFollowerStatus(true);
    setRepoStatus(false);
  };
  const handleRepo = () => {
    setDataStatus(true);
    setFollowerStatus(false);
    setRepoStatus(false);
  };

  return (
    <div>
      <center>
        <h1>GitHub User Information</h1>
      </center>
      <center>
        <form onSubmit={handleSubmit} className={style.form}>
          <input
            type="text"
            value={user}
            placeholder={"Search Users..."}
            onChange={(e) => setUser(e.target.value)}
          />
          <input type="submit" />
        </form>
      </center>

      {/* repositories list section */}
      <div className="MainContainer">
        {status && (
          <div className={style.userDetails}>
            <center>
              <img style={{borderRadius:"50%"}} src={data[0]?.owner.avatar_url} alt="" />
              <div>
                <h1>{data[0]?.owner.login}</h1>
                {(dataStatus || repoStatus) && (
                  <button style={{height:"60px",fontSize:"20px",borderRadius:"10px"}} onClick={handleFollowers}>Go to Followers</button>
                )}
                {follwerStatus && (
                  <button style={{height:"60px",fontSize:"20px",borderRadius:"10px"}} onClick={handleRepo}>Go to Repositories</button>
                )}
              </div>
            </center>
          </div>
        )}
        {dataStatus && (
          <div className={style.reposDiv}>
            {loading && <h1 style={{ color: "green" }}>Loading.....</h1>}
            {error && <h1 style={{ color: "red" }}>Error occurred</h1>}

            <div className={style.repositories}>
              {data?.map((el) => (
                <div
                  key={el.id}
                  onClick={() => {
                    console.log("el:", el);
                    setRepo(el);
                    setRepoStatus(true);
                    setFollowerStatus(false);
                    setDataStatus(false);
                  }}
                >
                  <img src={el.owner.avatar_url} alt="" />
                  <div>
                    <h3>{el.name}</h3>
                    <p>{el.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* followers section */}
      {follwerStatus && (
        <div className={style.followers}>
          {followers?.map((el) => (
            <div key={el.id}>
              <Link to={`/followers/${el.login}`}>
                {/* <a href={el.html_url} target="_blank"> */}
                <img src={el.avatar_url} alt="" />
                <div>
                  <h3>{el.login}</h3>
                </div>

                {/* </a> */}
              </Link>
            </div>
          ))}
        </div>
      )}

      {/* individual repo section */}
      {repoStatus && (
        <div className={style.Indi}>
          <img src={repo.owner.avatar_url} alt="" />
          <div>
            <h3>{repo.name}</h3>
            <p>{repo.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
