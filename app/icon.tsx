import { ImageResponse } from 'next/og'
export const runtime = "edge";
export const size ={
    width : 32,
    height :32,
};
export const contentType ="image/jpg";
export default function Icon(){
    return new ImageResponse (
    (
      <div
        style={{
                fontSize:24,
                background :"green",
                width :"100%",
                display : "flex",
                justifyContent:"center",
                alignItems:"center",
                color:"white"
        }}
      >
        JB
      </div>
    ),
    {
      ...size,
    }
  );
}