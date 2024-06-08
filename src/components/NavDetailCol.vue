<template>
    <div>
        <div class="accordion aa" style="height: 100vh;" id="accordionExample">
            <div style="position: relative;">
                <h1>봉사안내</h1>
            </div>
            <div class="accordion-item ">
                <h2 class="accordion-header">
                    <button class="accordion-button fw-bold" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                        자원봉사 안내 
                    </button>
                </h2>
                <div id="collapse1" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <ul class="nav flex-column">
                            <li class="nav-item">
                                <RouterLink to="/" class="nav-link">Home1</RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink to="/" class="nav-link">Home2</RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink to="/" class="nav-link">Home3</RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink to="/" class="nav-link">Home4</RouterLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="accordion-item ">
                <h2 class="accordion-header">
                    <button class="accordion-button fw-bold" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapse2" aria-expanded="true" aria-controls="collapse2">
                        한국중앙자원봉사센터 
                    </button>
                </h2>
                <div id="collapse2" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <ul class="nav flex-column">
                            <li class="nav-item">
                                <RouterLink to="/" class="nav-link">Home1</RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink to="/" class="nav-link">Home2</RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink to="/" class="nav-link">Home3</RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink to="/" class="nav-link">Home4</RouterLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="accordion-item ">
                <h2 class="accordion-header">
                    <button class="accordion-button fw-bold" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapse3" aria-expanded="true" aria-controls="collapse3">
                        지역자원봉사센터 
                    </button>
                </h2>
                <div id="collapse3" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <ul class="nav flex-column">
                            <li class="nav-item">
                                <RouterLink to="/" class="nav-link">Home1</RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink to="/" class="nav-link">Home2</RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink to="/" class="nav-link">Home3</RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink to="/" class="nav-link">Home4</RouterLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="accordion-item ">
                <h2 class="accordion-header">
                    <button class="accordion-button fw-bold" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapse4" aria-expanded="true" aria-controls="collapse4">
                        자원봉사 수요기관정보
                    </button>
                </h2>
                <div id="collapse4" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <ul class="nav flex-column">
                            <li class="nav-item">
                                <RouterLink to="/" class="nav-link">Home1</RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink to="/" class="nav-link">Home2</RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink to="/" class="nav-link">Home3</RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink to="/" class="nav-link">Home4</RouterLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.aa{
    border: 1px solid black;
}
h1{
    text-align: center; 
    line-height:140px; 
    height: 140px; 
    color:#fff; 
    background: linear-gradient(to right, #f69210 0%, #f06704 100%);
    margin: 0;
}
h1::after{
    position: absolute;
    top: 40px;
    left: 100px;
    display: block;
    content: "";
    width: 100px;
    height: 1px;
    background: #fff
}
</style>
