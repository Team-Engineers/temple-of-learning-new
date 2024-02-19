function WhyJoinCard({ num, img, text }) {
    return (
      <div className="p-6 rounded-lg  duration-300 hover:scale-125">
        <img src={require(`../../Assets/images/icon/${img}`)} alt="" className="mx-auto" width="60" />
        <h4 className="text-2xl font-bold mt-2">#{num}</h4>
        <p className="font-medium">{text}</p> 
      </div>
    );
  }

  export default WhyJoinCard;
  