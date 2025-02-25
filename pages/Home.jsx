import React from 'react'

const Home = () => {
  return (
    <div>
     <img src="/image.jpg" class="img-fluid w-100 pt-1" alt="..."/>
     <div class="row row-cols-1 row-cols-md-2 g-4 m-2">
  <div class="col">
    <div class="card">
      <img src="/image1.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Vegetables Recipes</h5>
        <p class="card-text">Tomato ,Potato, Carrot, BeetRoot, LadiesFinger, Spinach, Cucumber, Brinjal, Cabbage, Cauliflower, Onions, Raddish</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="/image2.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Biryani Recipes</h5>
        <p class="card-text">Hyderabadi Dum Biryani ,Tehari Biryani, Paradise Biryani, Mutton Biryani, Chicken Biryani</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="/image3.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">idli</h5>
        <p class="card-text">Plain idli, Masala idli, Sambar idli</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="/image4.jpg" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Puri</h5>
        <p class="card-text">Aloo Puri, Sweet Puri, Masala Puri</p>
      </div>
    </div>
  </div>
</div>
<div class="col">
    <div class="card">
      <img src="/image5.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Dosa</h5>
        <p class="card-text">Masala Dosa, Onion Dosa, Plain Dosa, Set Dosa, Cheese Dosa</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="/image6.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Bonda</h5>
        <p class="card-text">Mysore Bonda, Onion Bonda, Spinach Bonda</p>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Home