/**
 * Created by Rychou on 2018/4/19.
 */
import React, { Component } from "react";
import $ from "jquery";
import url from "./audio/gbqq.mp3"; // 引入背景音乐文件

class Main extends Component {
  state = {
    date: {},
  };
  componentDidMount() {
    this.print();
    setInterval(() => {
      this.time(2021, 7, 22); // 你们的纪念日
    }, 1000);
    var audio = document.getElementById("audio");
    setTimeout(() => audio.play(), 8500); // 背景音乐在页面加载后，延迟播放的时长，单位：毫秒。
  }
  print = () => {
    $.fn.autotype = function () {
      var _this = $(this);
      var str = _this.html();
      // 正则替换代码行之间添加的多个空格，不去除换行输出会有明显的停顿：实际是在输出多个空格
      str = str.replace(/(\s){2,}/g, "$1");
      var index = 0;
      $(this).html("");
      var timer = function fn() {
        var args = arguments;
        var current = str.slice(index, index + 1);
        // html标签完整输出,如：<p>
        if (current == "<") {
          index = str.indexOf(">", index) + 1;
        } else {
          index++;
        }
        //位运算符: 根据setInterval运行奇偶次来判断是否加入下划线字符“_”，使输入效果更逼真
        if (index < str.length - 1) {
          //打印字符倒数第2个字符开始，不加下划线字符，以防止结束符可能会多输出一下划线字符
          _this.html(str.substring(0, index) + (index & 1 ? "_" : ""));
        } else {
          _this.html(str.substring(0, index));
          clearTimeout(timer);
        }
        setTimeout(fn, 200);
      };
      // 延迟1s开始
      setTimeout(timer, 1000);
    };
    $("#autotype").autotype();
  };
  time = (year, month, day) => {
    var dateNow = new Date();
    var dateJNR = new Date(year, month - 1, day);
    // var anniversary = parseInt((dateNow - dateJNR) / (365*24*3600*1000))
    var d = parseInt((dateNow - dateJNR) / (24 * 3600 * 1000));
    var hour = parseInt(((dateNow - dateJNR) / (3600 * 1000)) % 24);
    var minute = parseInt(((dateNow - dateJNR) / (1000 * 60)) % 60);
    var second = parseInt(((dateNow - dateJNR) / 1000) % 60);
    this.setState({
      date: { d: d, hour: hour, minute: minute, second: second },
    });
  };
  render() {
    const date = () => {
      if (this.state.date.d !== undefined) {
        const { d, hour, minute, second } = this.state.date;
        return (
          <p>
            我们已经一起走过了: <span className="date-text">{d}</span> 天{" "}
            <span className="date-text">{hour}</span> 小时{" "}
            <span className="date-text">{minute}</span> 分{" "}
            <span className="date-text">{second}</span> 秒{" "}
          </p>
        );
      }
    };
    return (
      <div className="App animated bounceInLeft">
        <div className="date">{date()}</div>
        <div id="autotype">
          <h1 style={{ fontWeight: 900 }}>哈喽！小蛄蛹！</h1>
          <p>在煽情开始之前，先放首歌当背景音乐吧！Music!</p>
          <p>
            今天是一个普通的日子，从2021年7月22日到现在，我们一起经历了许许多多的事情，
            有欢笑也有争吵，也曾因为一些事情闹过分手，但是我们都走过来了。
          </p>
          <p>
            小蛄蛹,这些话我从来没有对其他人说过，你又在用脸杀人，这都是我的心里话。小蛄蛹！我要请你喝酒
            什么酒 我们的喜酒
            ，你就是我的一切了。说老实话，你是可以照亮流浪灵魂归途的北极星，你就是我的一切了。小蛄蛹，世间万物
            唯你最入我心 。小宝贝，如果你累了 可以止步看夕阳
            人生的路上我陪你流浪
            。说老实话，你呼唤我的时候我像是一朵等待你已久的花
            ，小蛄蛹，这就是我对你的感觉。小蛄蛹！我喜欢的人光芒万丈，我可不能一身戾气
          </p>
          <p>
            这都是我的心里话。当星河都在变迁，你我却仍天各一边
            但请相信，纵使万水千山 日日夜夜我对你的爱与思念从未改变
            。小蛄蛹，你知道我最喜欢什么神嘛？ 你的眼神
            。小蛄蛹！愿变成一颗流星即便燃尽一生也要跌跌撞撞闯入你的眼眸
            ，这都是我的心里话。
          </p>
          <p>
            土豆会变成土豆泥 猜猜我会变成泥 我爱泥
            。小宝贝，世界上好人不少不过你是最重要的一个你要是愿意我就永远爱你你要不愿意我就永远相思
            ，你就是我的一切了。小蛄蛹，千山万水就当伏笔 总会遇到姗姗来迟的你
            。说老实话，时间总是把对你最好的人留在最后
            毕竟喜欢就像一阵风而爱是细水长流 ，你没想到吧。
          </p>
          <p>
            一个人爱上小溪，是因为没有见过大海 可我已见过银河，但我只爱一颗星
            。遇上你的感觉就像走了很远的路终于回到家了
            ，小蛄蛹，这就是我对你的感觉。小宝贝，我最讨厌你问我爱你吗
            爱不爱难道你不知道吗 你不会把试竖着看下吗
            ，你就是我的一切了。小蛄蛹！在我心里兴风作浪的是你让我甘愿上当的亦是你
            。
          </p>
          <p>
            头！你的出现让我发觉世界不无聊，你一定不能想象。心不会被困住，江湖也温柔。说老实话，明天生动而具体，有且只有一个你。月亮被嚼碎变成了小星星
            你就藏在漫天的星光里
            ，这都是我的心里话。小蛄蛹，遇见你这位绝世大可爱，我多想让这时间慢半拍。小蛄蛹！你是我枕边的书
            字字珍贵 句句入心 ，这都是我的心里话。
          </p>
          <p>最后祝我的小蛄蛹天天开心，上岸成功！</p>
          <div style={{ textAlign: "right" }}>
            <p>爱你的♥小赵</p>
            {/* <p>2018年4月23日</p> */}
          </div>
        </div>
        <audio id="audio" src={url}></audio>
      </div>
    );
  }
}
export default Main;
