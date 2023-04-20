import * as React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { IMAGES } from '../utils';

export default function ExpCard({ image, url, title, description }) {
  const navigate = useNavigate();

  const toIframe=()=>{
    navigate('/experiment', {state:{url:url}});
  }

  return (
    <>
        <div className="card">
            <img src={ image } alt={"Nicely"} />
            <a
                onClick={()=>{toIframe()}}
                style={{
                  textTransform: "uppercase",
                  cursor: "pointer"
                }}
            >
                <h3>{ title }</h3>
            </a>
            <p>{ description }</p>
        </div>
    </>
  );
}