import React from "react";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Pagination,
    PaginationItem,
    PaginationLink
  } from "reactstrap";

const Paganation = props => {
    console.log(props)

    const handleClickFirst = (e) => {
        e.preventDefault();
        props.setUrl("https://rickandmortyapi.com/api/character/?page=1");
    }
    
    const handleClickPrev = (e) => {
        e.preventDefault();
        if(props.data.info.prev === ""){
            return;
        } else{
          props.setUrl(props.data.info.prev);  
        }
        
    }

    const handleClickNext = (e) => {
        e.preventDefault();
        props.setUrl(props.data.info.next);
    }

    const handleClickLast = (e) => {
        e.preventDefault();
        props.setUrl("https://rickandmortyapi.com/api/character/?page=25");
    }

    return (
        <Pagination aria-label="Page navigation example">
    <PaginationItem>
        <PaginationLink first onClick={e => handleClickFirst(e)} href="#" />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink previous onClick={e => handleClickPrev(e)} href="#" />
      </PaginationItem>

      <PaginationItem>
        <PaginationLink next onClick={e => handleClickNext(e)} href="#" />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink last onClick={e => handleClickLast(e)} href="#" />
      </PaginationItem>
    </Pagination>
  );
}

export default Paganation;