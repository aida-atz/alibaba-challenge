<template>
  <div class="country-card-loading">
    <div class="country-card-loading--img">
      <font-awesome-icon icon="fa-solid fa-spinner" spin />
    </div>
    <div class="country-card-loading--container">
      <span class="country-card-loading--name"></span>
      <div class="country-card-loading--details">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.country-card-loading {
  width: 100%;
  border-radius: 5px;
  box-shadow: 0px 0px 20px 1px rgba(0, 0, 0, 0.16);
  margin: auto;
  @include themed() {
    background-color: t($secondary);
  }
  @include pulse-animation();
  &--img {
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
  }
  &--container {
    padding: 2rem;
  }
  &--name {
    display: inline-block;
    height: 0.8rem;
    width: 13rem;
    border-radius: 5px;
    @include themed() {
      background-color: t($text);
    }
  }
  &--details {
    span {
      display: block;
      height: 0.5rem;
      @include themed() {
        background-color: t($text);
      }
      width: 8rem;
      border-radius: 5px;
      margin-top: 0.7rem;
    }
  }
}
</style>
