const Button = ({
  text,
  bg = "#FF624C",
  color = "#fff",
  py = "16px",
  px = "40px",
  fontName = "Montserrat",
  weight = "bold",
  rounded = "10px",
}) => {
  return (
    <button
      style={{
        background: bg,
        color: color,
        padding: `${py} ${px}`,
        fontFamily: fontName,
        fontWeight: weight,
        borderRadius: rounded,
        cursor: "pointer",
      }}
    >
      {text}
    </button>
  );
};

export default Button;

// const Button = ({text,bg="#FF624C",fontName="Montserrat",fontWeight="bold",size="xl",color="white", paddingX="10",paddingY="4",radius="10"}) => {
//   return (
//     <button className={ `bg-[${bg}] font-${fontName} font-${fontWeight} text-${size} text-${color} px-${paddingX} py-${paddingY} rounded-[${radius}px]`}>{text}</button>
//   )
// }

// export default Button
