import React from "react";

const Confirm = () => {
  return (
    <div class="alert alert-success alert-dismissible">
      <button type="button" class="close" data-dismiss="alert">
        ×
      </button>
      <i>
        <strong>Fast!</strong>
      </i>{" "}
      You have now succesfully checked out the selected movies. Enjoy your
      screen time!
    </div>
  );
};

export default Confirm;
