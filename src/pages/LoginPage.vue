<template>
  <div class="main">
    <div class="wrapper">
      <div class="content">
        <div class="card">
          <div class="title">Login</div>
          <div class="subtitle">Enter your credentials to access account</div>
          <div class="form__controls">
            <label for="login">Login</label>
            <input type="text" id="login">
          </div>
          <div class="form__controls">
            <label for="password">Password</label>
            <input type="password" id="password">
          </div>
          <button class="btn">Login</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.main {
  width: 100%;
  height: 93vh;
  background-color: #000;
}
.wrapper {
  width: 1140px;
  margin: 0 auto;
}
.content {
  width: 100%;
  height: 93vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  flex-direction: column;
}
.card {
  border: 2px solid #fff;
  border-radius: 20px;
  width: 40%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 40px 50px;
  transition: .3s;
  box-shadow: 0 5px 15px rgba(255, 255, 255, .3);
}

.title {
  font-size: 40px;
  margin-bottom: 10px;
}
.subtitle {
  opacity: .7;
  font-size: 16px;
  text-align: center;
  margin-bottom: 80px;
}
.form__controls {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 20px;
}
label {
  font-size: 20px;
  margin-bottom: 10px;
}
input {
  outline: none;
  border: 2px solid #fff;
  background-color: transparent;
  border-radius: 12px;
  padding: 10px 15px;
  width: 100%;
  color: #fff;
  transition: .2s;
}
input:focus-within {
  box-shadow: 0 5px 15px rgba(255, 255, 255, .2);
}

.btn {
  margin-top: 50px;
  width: 100%;
  font-weight: 700;
  outline: none;
  background-color: transparent;
  border: 2px solid #fff;
  border-radius: 12px;
  color: #fff;
  padding: 10px 15px;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;;
}
.btn:hover {
  background-color: #fff;
  border-color: transparent;
  color: #000;
  box-shadow: 0 5px 15px rgba(255, 255, 255, .4);
}
</style>