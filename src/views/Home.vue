<template>
  <div class="home">
    <div class="heroHeader " >
      <div class="heroText animate__animated animate__fadeInLeft" v-if="defaultLanguage" >
        <span >ベストレストラン</span>
        <h1  >
          Best <span class="blueText">ramen</span>  restaurant
        </h1>
        <p >
          Honest ramen crafted with ethically <br>
          farmed ingredients and love
        </p>
        <div class="buttonsHero">
          <span class="makeOrder" >Make Order</span>
          <span class="discoverMenu">Discover menu</span>
        </div>
      </div>
      <div class="heroText animate__animated animate__fadeInLeft" v-if="!defaultLanguage">
        <span >Best Restaurant</span>
        <h1 >
          ベスト <span class="blueText">ラーメン</span>  レストラン
        </h1>
        <p >
          倫理的に育てられた食材と
          愛情で作られた正直なラーメン
        </p>
        <div class="buttonsHero">
          <span class="makeOrder" >順序を作ります</span>
          <span class="discoverMenuJap" >メニューを見つける</span>
        </div>
      </div>
      <div class="animate__animated animate__fadeInRight">
        <img :src="ramen">
      </div>
    </div>
    
    <div class="ourBenefits" >
      <svg viewBox="0 0 1440 156" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 128L80 117.3C160 107 320 85 480 96C640 107 800 149 960 154.7C1120 160 1280 128 1360 112L1440 96V0H1360C1280 0 1120 0 960 0C800 0 640 0 480 0C320 0 160 0 80 0H0V128Z" fill="#FCF4EE"/>
      </svg>
      <div class="header" data-aos="fade-right">
        <span v-if="defaultLanguage">私 た ち の 利 点</span>
        <span v-if="!defaultLanguage">Our benefits</span>
        <h1 v-if="defaultLanguage">
          Our <span>benefits</span>
        </h1>
        <h1 v-if="!defaultLanguage">
          私たちの <span>利点</span>
        </h1>
      </div>
      <div class="container" >
          <div data-aos="fade-right">
            <img :src="ramenShop" alt="">
          </div>
          <div class="benefitsText" data-aos="fade-left">
            <div>
              <span class="number">1</span> 
              <h1 class="titleBenefit" v-if="defaultLanguage"> 
                Ethically Farmed Ingredients
              </h1>
              <h1 class="titleBenefit" v-if="!defaultLanguage"> 
                倫理的に栽培された成分
              </h1>

              <p v-if="defaultLanguage">
                Happy animals, raised responsively. <br>
                Fresh vegetables, <span>grown locally</span>, Portion <br>
                sizes, crafted midfully.
              </p>
              <p v-if="!defaultLanguage">
                それに応じて育てられた幸せな動物。新鮮な野菜、
                <span>地元産</span>、ポーションサイズ、
                中程度に作られています。
              </p>
            </div>
            <div>
              <span class="number">2</span> 
              <h1 class="titleBenefit" v-if="defaultLanguage"> Home-cooked broths</h1>
              <h1 class="titleBenefit" v-if="!defaultLanguage"> 自家製のスープ </h1>
              <p v-if="defaultLanguage">
                The best of local, the best of <span>Japan</span>.
                Our noodle are produced by industry-leader
                Sun Noodle, and our miso and shoyu are custom made
                for us by our trusted <span>Japanese suppliers</span>. 
              </p>
              <p v-if="!defaultLanguage">
                地元の最高、<span>日本</span>の最高。
                私たちの麺は業界のリーダーによって生産されています
                サンヌードル、味噌、醤油は特注です
                信頼できる<span>日本のサプライヤー</span>による私たちのために。
              </p>
            </div>
            <div>
              <span class="number">3</span> 
              <h1 class="titleBenefit" v-if="defaultLanguage"> Tender loving cooking</h1>
              <h1 class="titleBenefit" v-if="!defaultLanguage"> 優しい料理</h1>
              <p v-if="defaultLanguage">
                It's honest because we care about our <span>ingridgents</span>,
                about our community, our planet and we are sure as hell passionate
                about <span>ramen</span>
              </p>
              <p v-if="!defaultLanguage">
                正直なところ、私たちは優しい<span>材料</span>、
                コミュニティ、惑星に関心があり、<span>ラーメン</span>
                に情熱を注いでいます
              </p>
            </div>
          </div>
        </div>
    </div>

    <div class="popularItems">
      <div class="header" data-aos="fade-right">
        <p v-if="defaultLanguage"> <span>Popular</span> Items</p>
        <p v-if="!defaultLanguage"> <span>人気の</span> アイテム</p>
      </div>
      <div class="container">
        <div class="item" data-aos="fade-left">
          <img :src="mastersChoice" alt="" >
          <div>
            <h1 v-if="defaultLanguage">The original ramen of the chef</h1>
            <h1 v-if="!defaultLanguage">シェフのオリジナルラーメン</h1>
            <p v-if="defaultLanguage">
              Spicy tonkutsu broth, this sliced and thick cut
              prok belly, kimchi and veggies, topped with a
              whole marinated egg.
            </p>
            <p v-if="!defaultLanguage">
              スパイシーなとんくつスープ、
              スライスした厚切りのプロックベリー、キムチ、
              野菜に丸ごとマリネした卵をトッピング。
            </p>
            <img :src="makeOrder" alt="" @click="clicked()" >
          </div>
        </div>
        <div class="item" data-aos="fade-right">
          <img :src="veganRamen" alt="" class="mobileImage">
          <div>
            <h1 v-if="defaultLanguage">Spicy tofu mazemen</h1>
            <h1 v-if="!defaultLanguage">辛い豆腐の迷路</h1>
            <p v-if="defaultLanguage">
              Borthless ramen: a whole new way to go 
              vegitarian. Silken tofu, nori sheet, soy
              sprout, mushroom, spring onions.
            </p>
            <p v-if="!defaultLanguage">
              スープ ラーメン：ベジタリアンになるためのまったく新しい方法。
              絹ごし豆腐、海苔、大豆もやし、きのこ、ねぎ。
            </p>
            <img :src="makeOrder" alt=""  @click="clicked()">
          </div>
          <img :src="veganRamen" class="desktopImage" alt="">
        </div>
        <div class="moreButton" data-aos="zoom-in">
          <p @click="clicked" v-if="defaultLanguage">Find out more</p>
          <p @click="clicked" v-if="!defaultLanguage">詳細はこちら</p>
        </div>
      </div>
      
    </div>

    <div class="team">
      <svg  viewBox="0 0 1440 288" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 288L60 282.7C120 277 240 267 360 256C480 245 600 235 720 208C840 181 960 139 1080 112C1200 85 1320 75 1380 69.3L1440 64V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V288Z" fill="white"/>
      </svg>
      <div class="container">
        <div class="rowOne">
          <div class="header" data-aos="fade-up">
            <p class="japaneseHeader" v-if="defaultLanguage">私たちのチーム</p>
            <p class="japaneseHeader" v-if="!defaultLanguage">Meet our team</p>
            <h1 v-if="defaultLanguage">Meet our <br> <span>team</span> </h1>
            <h1 v-if="!defaultLanguage"><span>チーム</span> <br> に会いましょう</h1>
            <p class="shortTeamDescription" v-if="defaultLanguage">
              It is more than just a team, it is people <br>
              who are really passionate with their work
            </p>
            <p class="shortTeamDescription" v-if="!defaultLanguage">
              それは単なるチームではなく、<br>
              彼らの仕事に本当に情熱を持っている人々です

            </p>
          </div>
          <div class="memberOne" data-aos="zoom-in">
            <img :src="teamMemberOne" alt="">
          </div>
        </div>
        <div class="rowTwo" data-aos="zoom-in">
          <div class="memberTwo">
            <img :src="teamMemberTwo" alt="">
          </div>
          <div class="memberThree" data-aos="zoom-in">
            <img :src="teamMemberThree" alt="">
          </div>
        </div>
        
      </div>
    </div>

    <div class="values">
      <svg viewBox="0 0 1440 156" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 128L80 117.3C160 107 320 85 480 96C640 107 800 149 960 154.7C1120 160 1280 128 1360 112L1440 96V0H1360C1280 0 1120 0 960 0C800 0 640 0 480 0C320 0 160 0 80 0H0V128Z" fill="#FCF4EE"/>
      </svg>
      <div class="container">
        <div class="tokyoSketch">
          <img :src="tokyoStreet" alt="">
        </div>
        <div class="text">
          <div class="header">
            <p v-if="defaultLanguage">私 達 の 価 値</p>
            <p v-if="!defaultLanguage">Our Values</p>
            <h1 v-if="defaultLanguage">Our <span>Values</span></h1>
            <h1 v-if="!defaultLanguage">私たちの<span>値</span></h1>
          </div>
          <div class="valueOne" data-aos="fade-left">
            <div class="valueOneHeader">
              <img :src="oneDottedLine" alt="">
              <h1 v-if="defaultLanguage">Honesty</h1>
              <h1 v-if="!defaultLanguage">正直</h1>
            </div>
            <div class="valueOneText" >
              <p v-if="defaultLanguage">
                We craft no-nonsense <span>honest ramen</span>,
                just great ingredients, great teqnique, slow cooking
                and a lot of TLC.
              </p>
              <p v-if="!defaultLanguage" data-aos="fade-right">
                私たちは、ナンセンスな<span>正直なラーメン</span>、
                素晴らしい食材、素晴らしいテクニック、
                スロークッキング、そしてたくさんのTLCを作り上げています。
              </p>
            </div>
          </div>
          <div class="valueTwo" data-aos="fade-right">
            <div class="valueTwoHeader">
              <img :src="twoDottedLine" alt="">
              <h1 v-if="defaultLanguage">Quality</h1>
              <h1 v-if="!defaultLanguage">品質</h1>
            </div>
            <div class="valueTwoText">
              <p v-if="defaultLanguage">
                Our commitment to <span>quality</span>,
                guides all our decisions - from from where 
                we source our eggs to who installs our kitchens.
              </p>
              <p v-if="!defaultLanguage">
                <span>品質</span>への取り組みは、
                卵の調達場所からキッチンの設置者まで、すべての決定を導きます。
              </p>
              
            </div>
          </div>
          <div class="valueThree" data-aos="fade-left">
            <div class="valueThreeHeader">
              <img :src="twoDottedLine" alt="">
              <h1 v-if="defaultLanguage">Hospitality</h1>
              <h1 v-if="!defaultLanguage">おもてなし</h1>
            </div>
            <div class="valueThreeText">
              <p  v-if="defaultLanguage">
                Human interaction is a <span>two way street.</span>,
                Serving a bowl of ramen is not hospitality  
                on its own: sharing a moment with the customer is 
                truly hospitable.
              </p>
              <p  v-if="!defaultLanguage">
                人間との交流は<span>双方向の道</span>です。
                ラーメンを一杯提供すること自体はおもてなしではありません。
                お客様と瞬間を共有することは本当に親切です。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="location">
      <div class="container">
        <div class="info">
          <span v-if="defaultLanguage">京 都</span>
          <span v-if="!defaultLanguage">Kyoto</span>
          <h1 v-if="defaultLanguage">Kyoto</h1>
          <h1 v-if="!defaultLanguage">京 都</h1>
          <div class="infoRow">
            <div class="infoRowContent" data-aos="fade-down">
              <h1 v-if="defaultLanguage">Where?</h1>
              <h1 v-if="!defaultLanguage">どこ?</h1>
              <p v-if="defaultLanguage">
                Nakagyo Ward, Tojijicho, 34-1
              </p>
              <p v-if="!defaultLanguage">
                等持寺町中京区34-1
                </p>
            </div>
            <div class="infoRowContent" data-aos="fade-down">
              <h1 v-if="defaultLanguage">When?</h1>
              <h1 v-if="!defaultLanguage">When?</h1>
              <p v-if="defaultLanguage">
                From <span>10 am </span> 
                to span 
                <span>10 pm</span>
                every day!
              </p>
              <p v-if="!defaultLanguage">
                <span>午前10時から</span>
                スパンする
                <span>午後10時</span>
                毎日！
              </p>
            </div>
          </div>
          <div class="infoRow">
            <div class="infoRowContent" data-aos="fade-up">
              <h1 v-if="defaultLanguage">Contact Us!</h1>
              <h1 v-if="!defaultLanguage">お問い合わせ!</h1>
              <p class="email">info@ramen.koyoto.com</p>
              <p>+81 50 34 66 19 86</p>
            </div>
            <div class="infoRowContent" data-aos="fade-up">
              <h1 v-if="defaultLanguage">Social Life</h1>
              <h1 v-if="!defaultLanguage">社会生活</h1>
              <p v-if="defaultLanguage">Discover our life</p>
              <p v-if="!defaultLanguage">私たちの生活を発見する</p>
              <div class="iconsContainer">
                <div class="icon" @click="clicked">
                  <svg width="20" height="20" viewBox="0 0 257 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M209.28 85.0133H256.021V3.60533C247.957 2.496 220.224 0 187.925 0C40.0427 0 80.2773 167.467 74.3893 192H0V283.008H74.368V512H165.547V283.029H236.907L248.235 192.021H165.525C169.536 131.776 149.291 85.0133 209.28 85.0133V85.0133Z" fill="#5C77DE"/>
                  </svg>
                </div>
                <div class="icon" @click="clicked">
                  <svg width="20" height="20" viewBox="0 0 512 416" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M512 49.248C492.96 57.6 472.672 63.136 451.52 65.824C473.28 52.832 489.888 32.416 497.696 7.808C477.408 19.904 455.008 28.448 431.136 33.216C411.872 12.704 384.416 0 354.464 0C296.352 0 249.568 47.168 249.568 104.992C249.568 113.312 250.272 121.312 252 128.928C164.736 124.672 87.52 82.848 35.648 19.136C26.592 34.848 21.28 52.832 21.28 72.192C21.28 108.544 40 140.768 67.904 159.424C51.04 159.104 34.496 154.208 20.48 146.496C20.48 146.816 20.48 147.232 20.48 147.648C20.48 198.656 56.864 241.024 104.576 250.784C96.032 253.12 86.72 254.24 77.056 254.24C70.336 254.24 63.552 253.856 57.184 252.448C70.784 294.016 109.376 324.576 155.264 325.568C119.552 353.504 74.208 370.336 25.12 370.336C16.512 370.336 8.256 369.952 0 368.896C46.496 398.88 101.6 416 161.024 416C354.176 416 459.776 256 459.776 117.312C459.776 112.672 459.616 108.192 459.392 103.744C480.224 88.96 497.728 70.496 512 49.248Z" fill="#5C77DE"/>
                  </svg>
                </div>
                <div class="icon" @click="clicked">
                  <svg width="20" height="20" viewBox="0 0 98 98" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.501 0H84.894C91.769 0 97.394 5.09 97.394 12.5V84.895C97.394 92.305 91.769 97.395 84.894 97.395H12.501C5.624 97.395 0 92.305 0 84.895V12.5C0 5.09 5.624 0 12.501 0ZM70.948 10.821C68.536 10.821 66.565 12.793 66.565 15.206V25.701C66.565 28.113 68.536 30.086 70.948 30.086H81.956C84.368 30.086 86.341 28.113 86.341 25.701V15.206C86.341 12.793 84.368 10.821 81.956 10.821H70.948ZM86.387 41.188H77.815C78.626 43.836 79.065 46.641 79.065 49.543C79.065 65.743 65.509 78.875 48.79 78.875C32.072 78.875 18.518 65.743 18.518 49.543C18.518 46.639 18.956 43.835 19.768 41.188H10.823V82.329C10.823 84.458 12.565 86.201 14.695 86.201H82.517C84.647 86.201 86.389 84.459 86.389 82.329V41.188H86.387ZM48.789 29.533C37.987 29.533 29.229 38.018 29.229 48.486C29.229 58.954 37.987 67.439 48.789 67.439C59.592 67.439 68.351 58.954 68.351 48.486C68.351 38.018 59.593 29.533 48.789 29.533Z" fill="#5C77DE"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="map">
          <img :src="kyotoMap" alt="">
        </div>
      
      
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ramen from "./../assets/images/ramen.png"
import ramenShop from "./../assets/images/ramenShop.png"
import mastersChoice from "./../assets/images/mastersChoice.png"
import veganRamen from "./../assets/images/veganRamen.png"
import makeOrder from "./../assets/images/makeOrder.png"
import teamMemberOne from "./../assets/images/teamMemberOne.png"
import teamMemberTwo from "./../assets/images/teamMemberTwo.png"
import teamMemberThree from "./../assets/images/teamMemberThree.png"
import tokyoStreet from "./../assets/images/tokyoStreet.png"
import oneDottedLine from "./../assets/images/oneDotted.png"
import twoDottedLine from "./../assets/images/twoDotted.png"
import threeDottedLine from "./../assets/images/threDotted.png"
import kyotoMap from "./../assets/images/kyotoMap.png"
// store
import { computed } from 'vue';
import store from "../store"

export default {
  name: 'Home',
  data(){
    return{
      ramen: ramen,
      ramenShop: ramenShop,
      mastersChoice: mastersChoice,
      makeOrder: makeOrder,
      veganRamen: veganRamen,
      teamMemberOne: teamMemberOne,
      teamMemberTwo: teamMemberTwo,
      teamMemberThree: teamMemberThree,
      tokyoStreet: tokyoStreet,
      oneDottedLine: oneDottedLine,
      twoDottedLine: twoDottedLine,
      threeDottedLine: threeDottedLine,
      kyotoMap: kyotoMap
    }
  },

  setup(){
    const defaultLanguage = computed(()=>store.state.defaultLanguage)

    return{
      defaultLanguage
    }
  },
  

  methods: {
    clicked(){
      console.log("clicked");
    }
  }
}
</script>

<style lang="scss" scoped>
.popularItems{
  background-image: url("./../assets/svg/blobbuLeft.svg");
  background-repeat: no-repeat;

}
</style>
