const CompanyProfile = () => {
  let auth = useSelector((state) => state.sign);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("AUTH", auth);
  }, [auth]);

  const handleClick = (details, id) => {
    dispatch(company(details, id));
  };

  return (
    <div>
      {auth.newData.map(({ users, id }, index) => (
        <div>
          <form className="login-form" key={index}>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="email"
                value={users.email}
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                name="password"
                value={users.password}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={() => handleClick(users, id)}
            >
              Login as company
            </button>
          </form>
        </div>
      ))}
    </div>
  );
};
export default CompanyProfile;
