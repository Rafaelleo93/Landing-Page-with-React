import React from 'react'

const content = {
    description : "Copyright © Your Website 2022"

}

const Footer = () => {
  return (
<footer class="text-muted py-5">
  <div class="text-center p-3 fixed-bottom bg-dark">
    <p>{content.description}</p>
  </div>
</footer>
  );
};

export default Footer