/* eslint-disable jsx-a11y/anchor-is-valid */
import './Membership.css';
import face from '../../images/membership/Face.png';
import face2 from '../../images/membership/face2.png';
import fire from '../../images/membership/Fire.png';
import group from '../../images/membership/Group.png';
import shining from '../../images/membership/Shining stars.png';
import star from '../../images/membership/Star.png';
import scribble from '../../images/membership/Scribble.png';
import Scribble from '../../images/testimonials/Scribble.png';



const Membership = () => {

    return (
        <div className='relative'>
            <div><img className='mem-orna top-[-20.3%] left-[46%] absolute' src={Scribble} alt="" /></div>
            <div className='mem-orna-two top-[-17%] left-[59%] absolute'> <img src={scribble} alt="" /> </div>

            <div className='container mx-auto'>
                <div className='memberh2 text-center mt-[140px]'>
                    <h2 className=''>Membership benefits</h2>
                    <p className=''>Become our sponsor and get all benefits</p>
                </div>

                <div className='member-card-main flex justify-center items-center gap-[20px]'>

                    <div className='member-card m-grid-font w-[373px] h-[225px]'>
                        <img className='mx-auto mb-[30px] mt-[10px]' src={group} alt="group" />
                        <h3>Topic by Request</h3>
                        <p>Lorem ipsum dolor sit amet consectet pis <br /> cing elit, sed do eiusmod tempor.</p>
                    </div>
                    <div className='member-card m-grid-font w-[373px] h-[225px]'>
                        <img className='mx-auto mb-[30px] mt-[10px]' src={shining} alt="group" />
                        <h3>Exclusive Content</h3>
                        <p>Lorem ipsum dolor sit amet consectet pis <br /> cing elit, sed do eiusmod tempor.</p>
                    </div>
                    <div className='member-card m-grid-font w-[373px] h-[225px]'>
                        <img className='mx-auto mb-[30px] mt-[10px]' src={face} alt="group" />
                        <h3>Join the Community</h3>
                        <p>Lorem ipsum dolor sit amet consectet pis <br /> cing elit, sed do eiusmod tempor.</p>
                    </div>

                </div>

                <div className='member-card-main flex justify-center items-center mt-[100px] gap-[20px]'>

                    <div className='member-card m-grid-font w-[373px] h-[225px]'>
                        <img className='mx-auto mb-[30px] mt-[10px]' src={face2} alt="group" />
                        <h3>Livestreaming Access</h3>
                        <p>Lorem ipsum dolor sit amet consectet pis <br /> cing elit, sed do eiusmod tempor.</p>
                    </div>

                    <div className='member-card m-grid-font w-[373px] h-[225px]'>
                        <img className='mx-auto mb-[30px] mt-[10px]' src={fire} alt="group" />
                        <h3>Exclusive Episodes & Merch</h3>
                        <p>Lorem ipsum dolor sit amet consectet pis <br /> cing elit, sed do eiusmod tempor.</p>
                    </div>

                    <div className='member-card m-grid-font w-[373px] h-[225px]'>
                        <img className='mx-auto mb-[30px] mt-[10px]' src={star} alt="group" />
                        <h3>And much more!</h3>
                        <p>Lorem ipsum dolor sit amet consectet pis <br /> cing elit, sed do eiusmod tempor.</p>
                    </div>
                </div>
                <div className='flex justify-center pb-[140px] mt-[100px]'>
                   <a href="#"><button className='member-btn'>SEE PRICING</button></a> 
                </div>
            </div>
        </div>
    );
};

export default Membership;