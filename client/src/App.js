import React from "react";
import "./sass/main.scss";

import Article from "./components/Article";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/lorem">
            <Lorem />
          </Route>
          <Route path="/ipsum">
            <Ipsum />
          </Route>
        </Switch>
      </Router>
    );
  }
}

function Home() {
  return (
    <div className="home">
      <div className="content-link">
        <Link to="/lorem">
          <h6>lorem</h6>
        </Link>
        <Link to="/ipsum">
          <h6>ipsum</h6>
        </Link>
      </div>
      <div className="sky">
        {/* moon animation */}
        <div class="moon"></div>
        {/* neon logo sign */}
        <div class="logo">
          <b>
            n<span>a</span>ttsk<span>i</span>ftet
          </b>
        </div>
      </div>
    </div>
  );
}

function Lorem() {
  return (
    <div>
      {" "}
      <div className="home-link">
        <Link to="/">
          <img alt="home" src="logo-moon-white.png"></img>
        </Link>
      </div>
      <Article title="Lorem" content={loremContent}></Article>
    </div>
  );
}

function Ipsum() {
  return (
    <div>
      {" "}
      <div className="home-link">
        <Link to="/">
          <img alt="home" src="logo-moon-white.png"></img>
        </Link>
      </div>
      <Article title="Ipsum" content={ipsumContent}></Article>
    </div>
  );
}

const loremContent = (
  <>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut erat
      urna. Donec nec augue vel dolor consequat porta. Praesent justo ligula,
      vestibulum non dui ac, porta efficitur massa. Donec faucibus id lacus et
      aliquet. Praesent diam nulla, pretium in scelerisque in, ornare sed sem.
      In luctus magna in scelerisque tincidunt. Etiam nec varius nisi, sed
      consequat nibh. Fusce nibh leo, consequat eu ultricies mattis, varius et
      tellus. Nulla bibendum, lectus vitae sagittis commodo, elit ante fermentum
      ante, sit amet blandit arcu ligula sit amet sem. Integer pretium magna non
      commodo suscipit. Nunc ornare faucibus venenatis. Donec porttitor
      efficitur dui vitae rutrum. Sed id varius augue, vitae dapibus magna.
    </p>

    <p>
      Cras elit ligula, fringilla vitae dapibus sit amet, volutpat et augue.
      Donec sodales mauris et lorem dapibus, a porttitor libero accumsan. Donec
      accumsan mauris eget rhoncus vulputate. Fusce porta ipsum vel mollis
      fermentum. Morbi sed consectetur enim, ut sodales lorem. Morbi blandit at
      erat in lacinia. Etiam vel dictum mauris. Nam lobortis egestas quam at
      fermentum. Aliquam vulputate semper urna, in pretium tortor efficitur non.
      Integer commodo porttitor neque. Mauris vitae diam euismod arcu hendrerit
      fringilla. Maecenas facilisis mauris et urna vulputate, volutpat dapibus
      nibh viverra.
    </p>

    <p>
      Phasellus vitae scelerisque quam, non porttitor est. Duis varius tincidunt
      magna id efficitur. Nam lorem purus, faucibus sed turpis sit amet,
      scelerisque sollicitudin arcu. Lorem ipsum dolor sit amet, consectetur
      adipiscing elit. In hac habitasse platea dictumst. Morbi tincidunt est
      enim, ut varius mauris rhoncus at. Aenean diam metus, pellentesque vel est
      ac, finibus finibus velit.
    </p>

    <p>
      Nullam suscipit elit ut turpis elementum volutpat. Proin ipsum lacus,
      consectetur a augue eu, elementum pulvinar justo. Aenean rhoncus hendrerit
      tortor eu placerat. Duis imperdiet leo finibus orci porttitor, id blandit
      nibh rhoncus. In auctor, nisl ut fermentum sodales, sapien ex elementum
      urna, quis sollicitudin turpis nunc at arcu. Donec eleifend varius felis,
      eu tristique ligula auctor eget. Nulla facilisi.
    </p>

    <p>
      Maecenas convallis mi eu orci sollicitudin, in dapibus enim vulputate.
      Donec et commodo metus. Donec finibus elementum nulla sed tincidunt. Duis
      congue et risus a lobortis. Etiam tempor volutpat dui quis condimentum.
      Nam sem nisl, rutrum vel mattis at, faucibus et eros. Orci varius natoque
      penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam
      venenatis nunc ac eros sollicitudin, a fringilla neque posuere. Morbi
      varius eu ante vel dapibus. Quisque non magna ex. Sed at pellentesque sem.
      Nulla facilisi. Sed efficitur dapibus aliquam.
    </p>

    <p>
      Praesent hendrerit egestas hendrerit. Quisque a neque ante. Etiam interdum
      leo libero, quis vehicula neque scelerisque eget. Suspendisse ornare
      fermentum metus, eu tincidunt arcu euismod vitae. Maecenas elementum
      viverra sem, in imperdiet libero feugiat sed. Aliquam erat volutpat. Sed
      finibus mi vel lectus elementum, scelerisque mollis dui sodales. Donec
      scelerisque in ex non lacinia.
    </p>

    <p>
      Maecenas eu risus id arcu pellentesque tincidunt a id eros. Quisque quis
      pulvinar neque. Nulla sed efficitur diam, a convallis magna. Mauris id
      libero rhoncus tortor pretium interdum id sit amet diam. Integer
      consectetur ipsum cursus urna mollis, ac dapibus risus luctus. Mauris
      molestie accumsan ligula. Fusce rhoncus tempus hendrerit.
    </p>

    <p>
      Aliquam a massa dolor. Curabitur non tempor orci. Pellentesque et ipsum
      fermentum, aliquam felis at, efficitur dui. Pellentesque habitant morbi
      tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam
      sit amet dolor sit amet turpis fringilla mattis. Aliquam non maximus
      felis, id posuere lacus. Pellentesque eleifend vulputate auctor.
    </p>

    <p>
      Vivamus congue posuere pretium. Vivamus consequat vestibulum mi non
      dapibus. Phasellus lacinia arcu quis neque cursus, non congue lectus
      scelerisque. Mauris ipsum elit, laoreet id ligula interdum, fringilla
      pretium sem. Suspendisse ante nibh, molestie at suscipit ut, auctor nec
      velit. Fusce eleifend diam id leo faucibus venenatis vitae sodales nisl.
      Vestibulum eu semper ante. Ut in sapien nisi. Vestibulum nulla nisl,
      dapibus non sagittis at, tincidunt congue massa.
    </p>

    <p>
      Quisque nec magna a eros feugiat egestas. Nunc ornare quis purus quis
      pretium. Vivamus eu nisl id leo porttitor lacinia quis ut metus. Praesent
      id eros nec ex varius venenatis. Suspendisse tempor sollicitudin
      elementum. Quisque et nisl sed odio tincidunt porttitor at non lorem. Sed
      bibendum a enim sit amet euismod. Fusce blandit ut lorem ut pretium.
      Phasellus molestie libero leo, vitae vulputate diam laoreet non. Aliquam
      scelerisque facilisis dui.
    </p>
  </>
);

const ipsumContent = (
  <>
    <p>
      Praesent ut nisl arcu. Phasellus condimentum velit sed odio tincidunt, a
      pretium nulla molestie. Pellentesque at nisi facilisis, malesuada odio ut,
      imperdiet justo. Maecenas risus dui, rhoncus at congue id, porta in nisi.
      Fusce at ipsum bibendum, feugiat massa varius, bibendum lectus. Cras ut
      vulputate sem, quis luctus ante. Interdum et malesuada fames ac ante ipsum
      primis in faucibus. Phasellus sit amet egestas diam.
    </p>

    <p>
      Ut interdum massa ligula, quis ultrices purus bibendum vitae. Sed bibendum
      libero sit amet tellus efficitur aliquam sit amet sit amet felis.
      Vestibulum pulvinar turpis nunc, sit amet posuere lorem tincidunt in.
      Mauris cursus hendrerit massa sit amet convallis. Duis volutpat nulla a
      tortor commodo egestas sit amet vitae risus. Nullam eleifend dolor ac quam
      sollicitudin tincidunt. Etiam eu quam eget erat mattis ornare. Aliquam
      erat volutpat. Aliquam eu lacinia ex, nec consequat turpis.
    </p>

    <p>
      Proin quis sodales metus, et tempor quam. Vestibulum ante ipsum primis in
      faucibus orci luctus et ultrices posuere cubilia Curae; Proin convallis
      interdum velit, at rhoncus neque auctor quis. Nulla tempus scelerisque
      odio ut pharetra. Ut a vestibulum dolor. Sed condimentum neque ac ligula
      molestie, sit amet ullamcorper erat dictum. Ut consectetur tempor enim
      quis fringilla. Vestibulum in molestie eros, euismod congue turpis. Duis a
      leo finibus, ultrices magna eget, suscipit lacus. In eget commodo elit.
      Morbi a suscipit urna. In in tristique dui, in faucibus leo. Nunc
      dignissim auctor urna ac volutpat. Orci varius natoque penatibus et magnis
      dis parturient montes, nascetur ridiculus mus.
    </p>

    <p>
      Nulla vehicula quam orci, vel gravida ex mattis et. Integer ac aliquam
      felis, id hendrerit libero. In eu dolor luctus, aliquam massa a, molestie
      dui. In tellus orci, varius non tellus et, blandit consequat est. Sed
      rhoncus pharetra commodo. Aliquam erat volutpat. Aenean ut metus sed leo
      dictum luctus. Vivamus pretium, velit id accumsan suscipit, leo purus
      vestibulum urna, at tristique libero nisi congue eros. Cras scelerisque
      nunc viverra, egestas nisi nec, commodo justo. Curabitur nisi lectus,
      tempus non fringilla ut, pharetra et quam.
    </p>

    <p>
      Etiam metus odio, aliquet ornare orci ut, pharetra ullamcorper magna.
      Aliquam erat volutpat. Duis maximus sem eu fringilla finibus. Ut pulvinar
      justo quis suscipit ultricies. Quisque porttitor purus eget odio finibus
      efficitur. Sed sit amet lectus dolor. Nunc non massa sed odio congue
      rutrum. Nunc condimentum pharetra vulputate. Integer dignissim ullamcorper
      sodales. Aliquam accumsan, nulla vitae vestibulum facilisis, diam augue
      vulputate lacus, eget mattis tellus enim id nisi. Maecenas et erat a quam
      egestas tincidunt.
    </p>

    <p>
      Aenean et diam id eros semper iaculis. Phasellus turpis felis, suscipit at
      facilisis nec, fermentum sed lectus. In vitae dolor sit amet metus blandit
      vulputate. Quisque gravida lectus nec odio porttitor aliquet. Quisque quam
      enim, sagittis id maximus ut, venenatis vel arcu. Quisque vestibulum ex et
      aliquet laoreet. Vestibulum ante ipsum primis in faucibus orci luctus et
      ultrices posuere cubilia Curae; Mauris at lacus semper, ullamcorper odio
      sed, molestie lorem. Ut sit amet mi ut turpis sodales condimentum nec ac
      enim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Lorem
      ipsum dolor sit amet, consectetur adipiscing elit. Duis varius placerat
      velit vel eleifend. Nam ac mauris commodo, pretium sapien sed, accumsan
      neque. Orci varius natoque penatibus et magnis dis parturient montes,
      nascetur ridiculus mus. In vulputate ligula eget risus cursus, cursus
      volutpat elit mollis.
    </p>

    <p>
      Quisque vel interdum odio. Morbi augue diam, convallis ac ante eget,
      fermentum maximus elit. Sed tempus interdum lectus sed feugiat. Aenean
      fermentum aliquet iaculis. Nulla auctor mi ex, id volutpat sem malesuada
      nec. Fusce dignissim nec justo eu aliquet. Nam finibus aliquam dolor, in
      molestie ipsum pretium vitae. Pellentesque quis lorem elementum, convallis
      risus et, pulvinar urna. Vivamus cursus vulputate tellus, vel commodo
      velit ultrices id. Cras facilisis metus nunc, sed viverra mi rhoncus non.
      Aliquam laoreet ipsum non efficitur aliquam. In venenatis pretium ex.
      Vivamus sapien enim, fringilla eu elit faucibus, efficitur ultrices
      mauris. Nullam dolor mauris, finibus eu porta sed, tristique non eros.
      Quisque lobortis magna sed nisi fringilla, rutrum varius metus euismod.
      Donec eget justo ac ex viverra volutpat.
    </p>

    <p>
      Nullam id condimentum justo, sed aliquet nibh. Vivamus eget odio at orci
      fermentum placerat ac et arcu. Sed laoreet bibendum lacus, quis hendrerit
      mi maximus et. Sed sodales pharetra ex rhoncus semper. Interdum et
      malesuada fames ac ante ipsum primis in faucibus. Donec euismod ac nisl et
      vulputate. Duis ac sollicitudin quam. Praesent malesuada lectus leo, eget
      finibus dui placerat vitae. Vestibulum ante ipsum primis in faucibus orci
      luctus et ultrices posuere cubilia Curae; In auctor congue libero, id
      auctor sem auctor et. Nam dictum, dolor lacinia imperdiet accumsan, tellus
      justo dapibus arcu, vel scelerisque ipsum sem ut lectus. Suspendisse
      potenti.
    </p>

    <p>
      Etiam risus ex, pharetra venenatis nunc eget, rhoncus ultricies dolor. Sed
      mollis facilisis laoreet. Aliquam pulvinar mattis ligula eu congue. Morbi
      sit amet justo sed ante luctus convallis. In a lorem at odio rutrum auctor
      at a ex. Fusce feugiat efficitur gravida. Vestibulum sollicitudin leo eget
      tellus tincidunt, vitae vestibulum nulla semper. Fusce eget egestas
      ligula.
    </p>

    <p>
      Proin feugiat odio enim, eleifend finibus orci mollis id. Curabitur
      pellentesque hendrerit magna. Vivamus gravida mi elit, a rutrum diam
      accumsan sit amet. Donec ac magna at elit tempus condimentum et a leo.
      Donec diam magna, sollicitudin vitae nisi et, scelerisque lacinia lectus.
      Nulla sed venenatis est. Praesent a erat lacinia, pellentesque felis non,
      mollis odio.
    </p>

    <p>
      Etiam magna nisl, pulvinar at lacinia vel, pretium et dolor. Vestibulum
      posuere ante eu laoreet facilisis. In eget bibendum ligula. Nam volutpat
      at libero ut tempor. Duis quis pulvinar velit. Nam vestibulum nulla sit
      amet velit feugiat, et commodo velit congue. Duis et sapien tempus, rutrum
      dui posuere, mattis ex. Aenean a dolor vel tortor condimentum ultricies
      euismod nec nibh. Vestibulum iaculis lacus id vulputate placerat. Vivamus
      lobortis suscipit tincidunt.
    </p>
  </>
);

export default App;
