import data from "../../db.json" assert { type: "json" };

const params = new URLSearchParams(window.location.search)

let book = data.filter(function (book) {
  return book.id == params.get('id')
})

book = book[0]
console.log(book)
const category = book.categories.name;

const contentElement = document.querySelector('#content')

const _content = /*html*/`
  <div class="md:flex container mx-auto gap-3 block">
      <div class="w-full flex-none md:w-1/4">
      <img src="${book.images[0].base_url}">
      <div class="grid grid-cols-5 gap-3">
          ${book.images.map(function(image) {
              return `<img src="${image.base_url}" alt="">`
          }).join('')}
      </div>

        
          <div class="md:flex items-center mt-3 hidden">
            <p>Chia sẻ :</p>
            <img class="px-2" src="../images/face.png">
            <img src="../images/mess.png">
            <img class="px-2" src="../images/pro.png">
            <img src="../images/tw.png">
            <img class="px-2" src="../images/share.png">
          </div>
        </div>
        
        <div class="grow pt-4 block text-xl">
          <p class="py-3">${book.authors ? book.authors[0].name : "không xác định tác giả"}</p>
          <h3 class="">${book.name}</h3>

          <div class="flex py-3 ">
            <p>đánh giá:${book.rating_average}/5⭐</p>
            <p class="pl-6">${book.quantity_sold?.text}</p>
            </div>
        
          <!-- div1 -->
          <div class="block md:flex gap-4">
            <div class="flex-none w-2/3 md:block">
              <div class="bg-gray-300 px-3 py-4 hidden md:block">
                <div class="flex">
                  <p class="text-bold text-red-500 text-3xl">${book.list_price}</p>
                  <p class="px-3">109.000₫</p>
                  <p>%</p>
                </div>
        
                <div class="flex gap-2 items-center border border-blue-400 rounded-xl  w-[320px]">
                  <img src="../images/len.png">
                  <p>Thưởng lên đến 7,31 ASA ≈ 3.969 Xu</p>
                  <img src="../images/hoi.png">
                </div>
              </div>

              <div class="md:hidden py-3">
                  <p class="text-bold text-red-500 text-4xl py-2">${book.list_price}</p>
                  <p>Thưởng lên đến 7,31 ASA ≈ 3.969 Xu</p>
                </div>
        
              <br><hr>
        
              <div class="md:block flex my-3">
                <p>15 mã giảm giá</p>
                <div class="flex items-center">
                  <button class="py-1 px-3 ml-6 rounded-lg border border-blue-400">Giảm 10k</button>
                  <button class="py-1 px-3 rounded-lg border border-blue-400 ml-3">Giảm 20k</button>
                  <button class="py-1 px-3 rounded-lg border border-blue-400 ml-3 hidden md:block">Giảm 30k</button>
                  <img class="bg-white" src="../images/ben.png" alt="">
                </div>
              </div>
        
              <hr class="my-2">
        
              <div class="md:flex hidden">
                <p>Giao đến : Q. Hoàn Kiếm, P. Hàng Trống, Hà Nội </p>
                <p class="text-blue-500"> - Đổi địa chỉ</p>
              </div>
        
              <div class="md:hidden flex">
                <h1>Nhập địa chỉ giao hành</h1>
                <img class="bg-white ml-24" src="../images/ben.png" alt="">
              </div>
        
              <div class="hidden md:flex mt-4 gap-2">
                <div class="border border-gray-300 rounded-lg px-3 py-2">
                  <div class="flex items-center">
                    <img src="../images/now.png" alt="">
                    <p class="text-green-500 pl-3">Trước 18:00 hôm nay</p>
                  </div>
                  <p class="py-2">19.000đ</p>
                  <div class="flex gap-2 items-center border border-blue-400 rounded-xl">
                    <img src="../images/len.png">
                    <p>Freeship 100% chỉ với 34 ASA</p>
                    <img src="../images/hoi.png">
                  </div>
                </div>
                  
                <div class="border border-gray-300 rounded-lg px-3 py-2">
                    <div class="flex items-center">
                      <img src="../images/now.png" alt="">
                      <p class="text-green-500 pl-1">10.000đ (Freeship 30K đh 149K)</p>
                    </div>
                    <p class="py-2">19.000đ</p>
                    <div class="flex gap-2 items-center border border-blue-400 rounded-xl">
                      <img src="../images/len.png">
                      <p>Freeship 100% chỉ với 18 ASA</p>
                      <img src="../images/hoi.png">
                    </div>
                </div>
              </div>
            </div>
        
            <!-- div2 -->
            <div class="grow">
              <div class="hidden md:flex items-center">
                <img class="pr-3" src="../images/tikii.png" alt="">
                <div class="">
                  <p>TIKI TRADING</p>
                  <img src="../images/of.png" alt="">
                </div>
              </div>
        
              <div class="md:flex hidden">
                <div>
                  <p>4.6/5</p>
                  <p>4,7tr+</p>
                </div>
                <p class="px-10">|</p>
                <div>
                  <p>408k+</p>
                  <p>Theo dõi</p>
                </div>
              </div>
        
              <div class="hidden md:flex gap-3">
                <div class="flex items-center border border-blue-300 rounded-lg px-3 py-4">
                  <img src="../images/shop.png" alt="">
                  <p>Xem shop</p>
                </div>
        
                <div class="flex items-center border border-blue-300 rounded-lg px-3 py-4">
                  <img src="../images/theo.png" alt="">
                  <p>Theo dõi</p>
                </div>
              </div>
        
              <hr class="my-3 hidden md:block">
        
              <div class="md:flex items-center gap-2 hidden">
                <center>
                  <div>
                    <img classjustify-cente src="../images/tich.png" alt="">
                    <p>Hoàn tiền</p>
                    <p>111%</p>
                    <p>nếu hàng giả</p>
                  </div>
                </center> <center>   
                  <div>
                    <img class="justify-center" src="../images/like.png" alt="">
                    <p>Mở hộp</p>
                    <p>kiểm tra</p>
                    <p>nhận hàng</p>
                  </div>
                </center> <center>
                  <div>
                    <img class="justify-center" src="../images/quay.png" alt="">
                    <p>Đổi trả trong</p>
                    <p>30 ngày</p>
                    <p>nếu sp lỗi</p>
                  </div>
                </center>
              </div>
        
              <div class="flex md:rounded-md md:border-gray-400 md:border py-2 justify-between">
                  <div class="ml-3">
                    <p>8 nhà bán khác</p>
                    <p>Giá từ 75.210 ₫</p>
                  </div>
        
                  <div class="border border-blue-300 px-3 py-2 mr-4 rounded-xl">
                    <p>So Sánh</p>
                  </div>
              </div>
            </div>
          </div>
        
          <h2 class="md:block hidden">Số lượng</h2>
        
          <div class="md:flex hidden">
            <button class="border border-black py-2 px-4">-</button>
            <input class="w-24 border border-black" type="text">
            <button class="border border-black py-2 px-4">+</button>
          </div>
        
          <button class="bg-red-500 px-24 py-3 mt-4 md:block hidden rounded-2xl">Chọn Mua</button>
        
        </div>
        
        </div>
        
        <div class="container mx-auto">
            <p class="text-4xl mb-4">Sản phẩm tương tự</p>
            <div class="grid md:grid-cols-4 lg:grid-cols-5 grid-cols-2 gap-3">
            ${data.filter(function(book) {
                return book.categories.name == category
            }).map(function(book) {
                return /*html*/`
                    <div>
                        <img src="${book.images[0].base_url}">
                        <p class="text-center">${book.name}</p>
                    </div>
                `
            }).join('')}
        </div>
        
        <div class="hidden md:block container mx-auto px-24 py-8">
          <p class="text-lg py-3">Thông tin chi tiết</p>
          <table border="1" class="py-10">
          ${book.specifications[0].attributes && book.specifications[0].attributes.map(function(info){
            return /*html*/`
            <tr class="py-10">
                <td class=" bg-gray-200 w-52 py-3 px-4 hover:bg-gray-300">${info.name}</td>
                <td class="w-[650px] px-4 hover:bg-gray-300">${info.value}</td>
            </tr>                                
            `
        })}
            
          </table>
        </div>
        
        <div class="container mx-auto py-4">
        <h1>Mô tả sản phẩm</h1>
        <p>${book.description}</p>
        </div>
        `

        contentElement.innerHTML = _content
        
        const detailImageElement = document.querySelector('#detail-image')