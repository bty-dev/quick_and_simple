<template>
  <div class="main">
    <div class="wrapper">
      <div class="content">
        <div class="title">My profile</div>
        <div class="profile__info">
          <label for="name">Name:</label>
          <div class="inp">
            <input
              v-model="name"
              type="text"
              id="name"
              :disabled="!isEditable"
            />
            <div v-if="!isEditable" class="edit__btn" @click="editHandler">
              Edit ✎
            </div>
            <div v-if="isEditable" class="edit__btn" @click="saveHandler">
              Save ✔
            </div>
          </div>
          <small style="color: red">Incorrect data!</small>
        </div>
        <div class="subtitle">Stats</div>
        <div class="stats__block">
          <div class="stats__item">Total projets: {{ totalProjects }}</div>
          <div class="stats__item">
            Deployed projets: {{ deployedProjects }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import axios from "axios";

export default {
  setup() {
    const name = ref("Ilnar Bty");
    const totalProjects = ref(0);
    const deployedProjects = ref(0);
    const isEditable = ref(false);

    const editHandler = () => {
      isEditable.value = true;
    };

    const saveHandler = () => {
      isEditable.value = false;

      axios.post("http://localhost:5000/api/changeUserName/1", {
        newName: name.value,
      });
    };

    onMounted(() => {
      axios.get("http://localhost:5000/api/user/1").then((res) => {
        name.value = res.data.name;
        totalProjects.value = res.data.projects;
        deployedProjects.value = res.data.deployedProjects;
      });
    });
    return {
      name,
      isEditable,
      editHandler,
      saveHandler,
      totalProjects,
      deployedProjects,
    };
  },
};
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
  padding-top: 50px;
  width: 100%;
  height: 93vh;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
.title {
  font-size: 30px;
  margin-bottom: 40px;
}
.profile__info {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
.subtitle {
  font-size: 30px;
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
  width: 80%;
  color: #fff;
  transition: 0.2s;
}
.inp {
  width: 40%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
}
.edit__btn {
  cursor: pointer;
  font-size: 15px;
  border: 2px solid transparent;
  transition: 0.2s;
  padding: 10px 15px;
  border-radius: 12px;
}
.edit__btn:hover {
  border-color: #fff;
}
.stats__block {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
.stats__item {
  display: flex;
  margin-bottom: 10px;
  font-size: 20px;
}
</style>