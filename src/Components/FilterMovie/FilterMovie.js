import React, { useState } from "react";
import { Button, Form, FormControl } from "react-bootstrap";

const FilterMovie = ({inputSearch, setInputSearch}) => {
  
  return (
    <div>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          onChange={(e) => setInputSearch(e.target.value)}
          value={inputSearch}
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </div>
  );
};

export default FilterMovie;
