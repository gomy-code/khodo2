import React from 'react';
import './seach.css';
function seach() { 
    return (
        <>
       <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Transparent Search Box</title>
        <link rel="stylesheet" href="styles.css" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" />
        <div className="wrapper">
          <div className="search_box">
            <form id="search_form">
            <input type="text" id="search" name="search" className="validate" placeholder="Rechercher votre anime" />
          <i className="fas fa-search" />
           </form>
          </div>
        </div>
      </div>
      <div id="search-results" className="container">
            
            </div>
      </>
    )
}
export default seach