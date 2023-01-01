for (let index = 0; index < 8; index++) {   
    let card = document.getElementById('card-count').innerHTML += `
    <div class="col" >
        <div class="card p-2">
            <img src="assets/images/sniper.png" class="card-img-top rounded" alt="">
            <div class="card-body">
                <h5 class="card-title">Deskripsi</h5>
                <div class="card-duration mb-4 text-secondary">Durasi : 1 Bulan</div>
                <div class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, official.</div>
                <div class="card-icon mt-2 fs-3">
                    <i class="fa-brands fa-php"></i>
                    <i class="fa-brands fa-vuejs"></i>
                    <i class="fa-brands fa-golang"></i>
                </div>
                <div class="btn-project mt-2">
                    <a href="" class="btn btn-dark">Edit</a>
                    <a href="" class="btn btn-dark">Delete  </a>
                </div>
            </div>
        </div>
    </div>
    `
}