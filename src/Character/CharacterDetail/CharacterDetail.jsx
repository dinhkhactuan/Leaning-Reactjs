const MainLeft = ({ character }) => {
  return (
    <>
      <div className="main-left">
        <div className="main-left-title">
          <p>THÔNG TIN TRUYỆN:</p>
        </div>
        <div className="main-left-content">
          <div className="main-left-content-img">
            <img
              src="https://tse1.mm.bing.net/th/id/OIP.e5ToFl0Gxx5Rk7qtjrZ9QQHaKi?rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Truyện"
            />
          </div>
          <div className="main-left-content-inf">
            <h1 className="title-character">{character.name}</h1>
            <hr />
            <div className="main-left-content-inf-rate">
              <div style={{ color: "#A0A0A0" }}>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
              <div>
                <p>Đánh giá cho truyện này</p>
              </div>
            </div>
            <div>
              <div className="main-left-content-inf-painted">
                <p className="painted"> {character.description}</p>
              </div>
              <div className="main-left-content-inf-title">
                <p>Giới thiệu nội dung:</p>
              </div>
              <div className="main-left-content-inf-character">
                <p>
                  "Diên nhĩ, Tiểu Thiên Nhất, bên này." <br /> <br />
                  An Tuyết Thiên như là hòa tan đông tuyết, kêu vô cùng thân
                  mật, còn ngoắc. <br /> <br />
                  "Cát, Không biết xấu hổ." Nguy Ôn Lan trọn mắt một cái, thầm
                  thầm mắng một câu. <br />
                  <br />
                  "Đồng cảm." An Ninh cũng nói. <br />
                  <br />
                  Tựa hồ tại chán ghét hai nữ nhân này phương diện, mẹ con các
                  nàng lại đã đạt thành nhất trí. <br />
                  <br />
                  Làm Mộc Đông Diên cùng An Thiên Nhất đến lúc, tại chỗ 3000 bộ
                  lạc dự tiệc người, cơ hồ đều ngừng tự mình nói chuyện với
                  nhau, mắt lộ ra vẻ sùng kính, nhìn về phía cái này quý phụ
                  cùng quý tử. <br />
                  <br />
                  "Cô cô." Mộc Đông Diên ôn nhu mỉm cười, thanh âm rất dễ nghe,
                  cũng làm cho rất nhiều thiếu niên thiếu nữ nhìn kia An Thiên
                  Nhất, leo lên Tuyết Tinh hảo. <br />
                  <br />
                  "Thiên Nhất." An Sương, An Huyền Minh, An Như Yên chờ Cô bằng
                  thiên tài, đều hướng thiếu niên tóc vàng kia gật đầu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MainLeft;
