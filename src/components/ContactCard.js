import React from "react";
import { Link } from "react-router-dom";
import user from "../assets/article1.jpg";

const ContactCard = (props) => {
  const { id,designation, article_id, famille,unite_mesure } = props.contact;
  return (
 
    <div className="card">
  
       <div className="img-container p-5"
                                
                                >
                                    <Link to="/articles">
                                              <img className="card-img-top" src={user} alt="product" />

                                    </Link>

                               
                                <div className="card-footer d-flex justify-content-between">
                                    <p className="align-self-center mb-0">
                                        { designation }
                                    </p>
                                </div>
                            </div>
                            </div>
    
  );
};

export default ContactCard;
