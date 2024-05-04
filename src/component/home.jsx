import Nav from "./root/nav";
import FullScreenEmojiComponent from './root/bg';
import Message from './home/message';
import FeatureHighlights from './highlights';
import Devs from './home/communitydev';
import Call2Action from './home/callactions';
import VedaCulture from './home/vedaculture';
import Footerr from './root/footer';
import FAQ from "./home/faq";
import Rules from "./home/rules";
// import UpEvents from "./upcEvents";

function home (){
    return (
        <> 
        <Nav/>
        <div class='py-50'></div>
        <Message/>
        <FeatureHighlights/>
        <Devs/>
        <Call2Action/>
        <div class="p-20"></div>
        <VedaCulture/>
        <Rules/>
        <FAQ/>
       <FullScreenEmojiComponent class='z-0 '> </FullScreenEmojiComponent>
        <Footerr/>
        </>
    )
}
export default home;

