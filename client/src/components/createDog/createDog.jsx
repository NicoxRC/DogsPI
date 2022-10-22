import React from "react";

export default function CreateDog() {
  return (
    <div>
      <form>
        <h1>Create Dog</h1>
        <div>
          <h4>name</h4>
          <input name="name" type="text" placeholder="Insert name.." />
        </div>
      </form>
    </div>
  );
}
