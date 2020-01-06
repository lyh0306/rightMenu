<template>
    <div class="drawing">
        <canvas id="drawing" width="500" height="500">A drawing of something.</canvas>
    </div>
</template>

<script>
    export default {
        name: "drawing",
        data () {
            return {

            }
        },
        mounted () {
            this.drawCanvas()
        },
        methods: {
            drawCanvas () {
                const drawing = document.getElementById("drawing");
                //确定浏览器支持<canvas>元素
                if (drawing.getContext){
                    const context = drawing.getContext("2d");
                    // /*
                    // * 根据 Mozilla 的文档
                    // * http://developer.mozilla.org/en/docs/Canvas_tutorial:Basic_usage
                    // */
                    // //绘制红色矩形
                    // context.fillStyle = "#ff0000";
                    // context.fillRect(10, 10, 50, 50);
                    // //绘制半透明的蓝色矩形
                    // context.fillStyle = "rgba(0,0,255,0.5)";
                    // context.fillRect(30, 30, 50, 50);
                    // //清除一个小矩形
                    // context.clearRect(10, 10, 20, 20);
                    // context.clearRect(30, 30, 20, 20);
                    // context.clearRect(50, 50, 20, 20);
                    // //绘制钟表
                    // //开始路径
                    // context.beginPath();
                    // //绘制外圆
                    // context.arc(100, 100, 99, 0, 2 * Math.PI, false);
                    // //绘制内圆
                    // context.moveTo(194, 100);
                    // context.arc(100, 100, 94, 0, 2 * Math.PI, false);
                    // //绘制分针
                    // context.moveTo(100, 100);
                    // context.lineTo(100, 15);
                    // //绘制时针
                    // context.moveTo(100, 100);
                    // context.lineTo(35, 100);
                    // //描边路径
                    // context.stroke();
                    // 填充三角形
                    context.beginPath();
                    context.moveTo(10,120);//从(10,20開始)
                    context.lineTo(10,180);//表示从(10,120)開始，画到(10,180)结束
                    context.lineTo(110,150);//表示从(10,180)開始，画到(110,150)结束
                    context.fill();//闭合形状而且以填充方式绘制出来

                    //三角形的外边框
                    context.beginPath();
                    context.moveTo(140,160);//从点(140,160)開始
                    context.lineTo(140,220);
                    context.lineTo(40,190);
                    context.closePath(); //关闭路径
                    context.stroke(); //以空心填充
                    var gradient = context.createLinearGradient(30, 30, 70, 70);
                    gradient.addColorStop(0, "white");
                    gradient.addColorStop(1, "black");
                    context.fillStyle = gradient;
                    context.fillRect(30, 30, 50, 50);

                    //一个复杂的多边形
                    context.beginPath();
                    context.moveTo(160,160);//从点(160,160)開始
                    context.lineTo(170,220);
                    context.lineTo(240,210);
                    context.lineTo(260,170);
                    context.lineTo(190,140);
                    context.closePath();
                    context.stroke();

                    //绘制弧
                    //绘制半圆弧
                    context.beginPath();
                    //在(100,300)处逆时针画一个半径为40，角度从0到180°的弧线
                    context.arc(100,300,40,0*Math.PI,1*Math.PI,true); //PI的弧度是180°
                    context.stroke();

                    //画一个实心圆
                    context.beginPath();
                    //在(100,300)处逆时针画一个半径为30，角度为0到360°的弧
                    context.arc(100,300,30,0*Math.PI,2*Math.PI,true);//2*Math.PI是360°
                    context.fill();

                    //画一个3/4弧
                    context.beginPath();
                    //在(200,300)处顺时针画一个半径为25。角度为0到270°的弧
                    context.arc(200,300,25,0*Math.PI,3/2*Math.PI,false);
                    context.stroke();

                }
            }
        }
    }
</script>

<style scoped>

</style>
