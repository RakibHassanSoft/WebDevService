import React, { useEffect } from 'react';
import { FaFacebook, FaLinkedin, FaShare, FaTwitter } from 'react-icons/fa';
import Header from '../../../Shared/Header/Header';
import { useParams } from 'react-router-dom';

const Blog = () => {

    let { Id } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top of the page on route change
    }, [Id]); // Ensure useEffect runs when Id changes

    return (
        <div className="bg-black bg-[url('https://i.ibb.co/ScTG5H0/fr88395q.png')] pb-20 pt-20 bg-fixed">
            <Header 
            title1={'Most popular'} 
            title2={'World wodth demand and'} 
            text={'A Campaign Manager Or Campaign Director Is A Paid Or Volunteer Individual Whose Role Is To Coordinate A Political Campaign\' Operations Such As Fundraising'}>

            </Header>
            <div className="flex w-ful md:9/12 lg:w-9/12  xl:w-10/12 m-auto lg:flex-row-reverse flex-col   justify-between  gap-2 pt-44 ">
                {/* left side  */}
                <div className=" w-full rounded bg-black p-4 border-2  shadow-white">
                    <div>
                        <img src="https://i.ibb.co/qNd0YFf/istockphoto-1335295270-2048x2048.jpg" alt="" />
                        <p className='relative bottom-16 p-3 bg-black w-[7rem]  text-center rounded-md text-white text-3xl hover:text-white hover:bg-green-400'>Driver</p>
                    </div>
                    <div className='p-4'>
                        <h1 className='font-bold unded-md text-green-400 text-3xl  hover:text-white'>SUCCESSFUL CAMPAIGNS USUALLY REQUIRE A CAMPAIGN MANAGER TO</h1>
                        <div>
                            avater an data and read option
                        </div>
                        <p className='text-md text-white font-sans mt-4 mb-4'>A Campaign Manager Or Campaign Director Is A Paid Or Volunteer Individual Whose Role Is To Coordinate A Political Campaign's Operations Such As Fundraising, Advertising, Polling, Getting Out The Vote With Direct Contact To The Public.Contrary To Popular Belief, Lorem Ipsum Is Not Simply Random Text. It Has Roots In A Piece Of Classical Latin Literature From 45 BC, Making It Over 2000 Years Old. Richard McClintock, A Latin Professor At Hampden-Sydney College In Virginia, Looked Up One Of The More Obscure Latin Words, Consectetur, From A Lorem Ipsum Passage, And Going Through The Cites Of The Word In Classical Literature, Discovered The Undoubtable Source. Lorem Ipsum Comes From Sections 1.10.32 And 1.10.33 Of "De Finibus Bonorum Et Malorum" (The Extremes Of Good And Evil) By Cicero, Written In 45 BC. This Book Is A Treatise On The Theory Of Ethics, Very Popular During The Renaissance. The First Line Of Lorem Ipsum, "Lorem Ipsum Dolor Sit Amet..", Comes From A Line In Section 1.10.32.</p>
                        <div className='mt-10 mb-10'>
                            <img src="https://i.ibb.co/qNd0YFf/istockphoto-1335295270-2048x2048.jpg" alt="" />
                        </div>
                        <p className='text-md text-white font-sans mt-4 mb-4'>A Campaign Manager Or Campaign Director Is A Paid Or Volunteer Individual Whose Role Is To Coordinate A Political Campaign's Operations Such As Fundraising, Advertising, Polling, Getting Out The Vote With Direct Contact To The Public.Contrary To Popular Belief, Lorem Ipsum Is Not Simply Random Text. It Has Roots In A Piece Of Classical Latin Literature From 45 BC, Making It Over 2000 Years Old. Richard McClintock, A Latin Professor At Hampden-Sydney College In Virginia, Looked Up One Of The More Obscure Latin Words, Consectetur, From A Lorem Ipsum Passage, And Going Through The Cites Of The Word In Classical Literature, Discovered The Undoubtable Source. Lorem Ipsum Comes From Sections 1.10.32 And 1.10.33 Of "De Finibus Bonorum Et Malorum" (The Extremes Of Good And Evil) By Cicero, Written In 45 BC. This Book Is A Treatise On The Theory Of Ethics, Very Popular During The Renaissance. The First Line Of Lorem Ipsum, "Lorem Ipsum Dolor Sit Amet..", Comes From A Line In Section 1.10.32.</p>

                        <h1 className=' font-bold unded-md text-green-400 text-3xl  hover:text-white'>HOW CAMPAIGN FUNDS ARE RELEASED</h1>

                        <p className='text-md text-white font-sans mt-4 mb-4'>A Campaign Manager Or Campaign Director Is A Paid Or Volunteer Individual Whose Role Is To Coordinate A Political Campaign's Operations Such As Fundraising, Advertising, Polling, Getting Out The Vote With Direct Contact To The Public.Contrary To Popular Belief, Lorem Ipsum Is Not Simply Random Text. It Has Roots In A Piece Of Classical Latin Literature From 45 BC, Making It Over 2000 Years Old. Richard McClintock, A Latin Professor At Hampden-Sydney College In Virginia, Looked Up One Of The More Obscure Latin Words, Consectetur, From A Lorem Ipsum Passage, And Going Through The Cites Of The Word In Classical Literature, Discovered The Undoubtable Source. Lorem Ipsum Comes From Sections 1.10.32 And 1.10.33 Of "De Finibus Bonorum Et Malorum" (The Extremes Of Good And Evil) By Cicero, Written In 45 BC. This Book Is A Treatise On The Theory Of Ethics, Very Popular During The Renaissance. The First Line Of Lorem Ipsum, "Lorem Ipsum Dolor Sit Amet..", Comes From A Line In Section 1.10.32.</p>

                        <p className='text-md text-white font-sans mt-4 mb-4'>A Campaign Manager Or Campaign Director Is A Paid Or Volunteer Individual Whose Role Is To Coordinate A Political Campaign's Operations Such As Fundraising, Advertising, Polling, Getting Out The Vote With Direct Contact To The Public.Contrary To Popular Belief, Lorem Ipsum Is Not Simply Random Text. It Has Roots In A Piece Of Classical Latin Literature From 45 BC, Making It Over 2000 Years Old. Richard McClintock, A Latin Professor At Hampden-Sydney College In Virginia, Looked Up One Of The More Obscure Latin Words, Consectetur, From A Lorem Ipsum Passage, And Going Through The Cites Of The Word In Classical Literature, Discovered The Undoubtable Source. Lorem Ipsum Comes From Sections 1.10.32 And 1.10.33 Of "De Finibus Bonorum Et Malorum" (The Extremes Of Good And Evil) By Cicero, Written In 45 BC. This Book Is A Treatise On The Theory Of Ethics, Very Popular During The Renaissance. The First Line Of Lorem Ipsum, "Lorem Ipsum Dolor Sit Amet..", Comes From A Line In Section 1.10.32.</p>

                    </div>
                </div>
                {/* right site  */}
                <div className="w-full lg:w-1/2 pb-4 bl-4 pr-4 flex flex-col gap-12">

                    {/* about section  */}
                    <div className='bg-black shadow-md rounded-lg p-4 border-2'>
                        <h1 className=' text-center text-4xl text-white border-b-2 border-b-green-600 font-bold pb-5 pt-5'>About us</h1>
                        <img src="https://i.ibb.co/MpQCPf9/384824688-1096597625083639-7137833643901927527-n-removebg-preview.png" alt="" />
                        <h1 className='text-white text-center font-bold mt-4 mb-4'>CREATIVE LEAD</h1>
                        <h1 className='font-thin text-green-500  text-center mb-4'><i>Md RAKIBUL ISLAM</i></h1>
                        <p className='text-white text-center mb-4'>Hello I Am Charis Deo -Powerful Pointing Has No Control About The Blind Texts It Is An Almost Unorthographic Life One Day However A Small Line Of Blind Text By The Name</p>

                        <div className='w-1/2 m-auto text-white text-4xl flex justify-between mt-6 mb-3'>
                            <FaFacebook></FaFacebook>
                            <FaTwitter></FaTwitter>
                            <FaLinkedin></FaLinkedin>
                            <FaShare></FaShare>
                        </div>
                    </div>
                    {/* recent post  */}
                    <div className='bg-black text-white border-2 shadow-md rounded-lg p-4'>
                        <h1 className=' text-center text-4xl text- block border-b-2 border-b-green-600 font-bold pb-5 pt-5'>RECENT POSTS.</h1>
                        <div className='flex flex-row mt-4 mb-2 gap-4'>
                            <img className='w-1/2' src="https://i.ibb.co/qNd0YFf/istockphoto-1335295270-2048x2048.jpg" alt="" />
                            <h1>WAVES FLUNG THEMSELVES AT THE BLUE EVENING.</h1>
                        </div>
                        <div className='flex flex-row mt-4 mb-2 gap-4'>
                            <img className='w-1/2' src="https://i.ibb.co/qNd0YFf/istockphoto-1335295270-2048x2048.jpg" alt="" />
                            <h1>WAVES FLUNG THEMSELVES AT THE BLUE EVENING.</h1>
                        </div>
                        <div className='flex flex-row mt-4 mb-2 gap-4'>
                            <img className='w-1/2' src="https://i.ibb.co/qNd0YFf/istockphoto-1335295270-2048x2048.jpg" alt="" />
                            <h1>WAVES FLUNG THEMSELVES AT THE BLUE EVENING.</h1>
                        </div>
                        <div className='flex flex-row mt-4 mb-2 gap-4'>
                            <img className='w-1/2' src="https://i.ibb.co/qNd0YFf/istockphoto-1335295270-2048x2048.jpg" alt="" />
                            <h1>WAVES FLUNG THEMSELVES AT THE BLUE EVENING.</h1>
                        </div>
                    </div>
                    {/* recent post  */}
                    <div className='bg-black shadow-md rounded-lg p-4 border-2'>
                        <h1 className=' text-center text-4xl text-white border-b-2 border-b-green-600 font-bold pb-5 pt-5'>CATEGORIES.</h1>
                        <div className='flex text-white flex-col justify-center items-center'>
                            <h1 className='text-xl font-bold pt-1 pb-1'>Travel (15)</h1>
                            <h1 className='text-xl font-bold pt-1 pb-1'>Travel (15)</h1>
                            <h1 className='text-xl font-bold pt-1 pb-1'>Travel (15)</h1>
                            <h1 className='text-xl font-bold pt-1 pb-1'>Travel (15)</h1>
                            <h1 className='text-xl font-bold pt-1 pb-1'>Travel (15)</h1>
                            <h1 className='text-xl font-bold pt-1 pb-1'>Travel (15)</h1>
                            <h1 className='text-xl font-bold pt-1 pb-1'>Travel (15)</h1>

                        </div>



                    </div>
                    {/* Tags */}
                    <div className='bg-black shadow-md rounded-lg p-4 border-2'>
                        <h1 className=' text-center text-4xl text-white border-b-2 border-b-green-600 font-bold pb-5 pt-5'>TAGS.</h1>
                        <div className="flex flex-wrap gap-2 pt-4 w-11/12 m-auto">
                            <span className="border text-white px-3 py-1 rounded-lg text-sm">TRAVEL</span>
                            <span className="border text-white px-3 py-1 rounded-lg text-sm">HISTORY</span>
                            <span className="border text-white px-3 py-1 rounded-lg text-sm">DESIGN</span>
                            <span className="border text-white px-3 py-1 rounded-lg text-sm">INTERNATIONAL</span>
                            <span className="border text-white px-3 py-1 rounded-lg text-sm">APP</span>
                            <span className="border text-white px-3 py-1 rounded-lg text-sm">MELBOURNE</span>
                            <span className="border text-white px-3 py-1 rounded-lg text-sm">BUSINESS</span>
                            <span className="border text-white px-3 py-1 rounded-lg text-sm">DARWIN</span>
                            <span className="border text-white px-3 py-1 rounded-lg text-sm">PERTH</span>
                            <span className="border text-white px-3 py-1 rounded-lg text-sm">BRISBANE</span>
                        </div>



                    </div>


                </div>

            </div>

        </div>

    );
};

export default Blog;