import React from "react";
import { Link, useHistory } from "react-router-dom";

function RegisterButton() {
  return (
    <div>
      <Link className="btn btn-sm btn-outline-primary mx-2" to={"/register"}>
        Register
      </Link>
    </div>
  );
}

export default RegisterButton;
