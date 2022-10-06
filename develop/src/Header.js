import React, { useState } from 'react';


// 헤더 CSS 정의
import './css/header.scss';


const Header = () => {
    const [isOpen, setMenu] = useState(false);

    const hambugerBtn = () => {
        setMenu(isOpen => !isOpen);
    }

    return (
        <header>
            <nav className='container_header'>
                <div className='header_start'>
                    <div className='h_box'>
                        <button className='hambuger_btn' data-hambuger_btn onClick={hambugerBtn}>
                            <svg viewBox="0 0 24 24" focusable="false" className="style-scope">
                                <g>
                                    <path d="M21,6H3V5h18V6z M21,11H3v1h18V11z M21,17H3v1h18V17z" fill="#000"></path>
                                </g>
                            </svg>
                        </button>
                    </div>

                    <div className='l_box'>
                        <img src='./image/logo.png' alt='logo' width='110px' />
                    </div>
                </div>

                <div className='header_center'>
                    <input type="text" placeholder="검색" className="input_box" />

                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="search-button" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path fill="none" stroke-miterlimit="10" stroke-width="32" d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"></path>
                        <path fill="none" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M338.29 338.29L448 448"></path>
                    </svg>
                </div>

                <div className='header_end'>
                    <button type='button' className='end_btn'>
                        <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" className="end_add" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
                        </svg>
                    </button>

                    <a href='#'>
                        <div className='end_login'>
                            <svg viewBox="0 0 24 24" focusable="false" className="style-scope">
                                <g>
                                    <path d="M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10C22,6.48,17.52,2,12,2z M12,3c4.96,0,9,4.04,9,9 c0,1.42-0.34,2.76-0.93,3.96c-1.53-1.72-3.98-2.89-7.38-3.03C14.57,12.6,16,10.97,16,9c0-2.21-1.79-4-4-4C9.79,5,8,6.79,8,9 c0,1.97,1.43,3.6,3.31,3.93c-3.4,0.14-5.85,1.31-7.38,3.03C3.34,14.76,3,13.42,3,12C3,7.04,7.04,3,12,3z M9,9c0-1.65,1.35-3,3-3 s3,1.35,3,3c0,1.65-1.35,3-3,3S9,10.65,9,9z M12,21c-3.16,0-5.94-1.64-7.55-4.12C6.01,14.93,8.61,13.9,12,13.9 c3.39,0,5.99,1.03,7.55,2.98C17.94,19.36,15.16,21,12,21z" class="style-scope yt-icon"></path>
                                </g>
                            </svg>

                            <span className='end_login_txt'>로그인</span>
                        </div>
                    </a>
                </div>
            </nav>

            <div className='multi'>
                <aside>
                    <div className='container_main'>
                        <div className={isOpen ? 'sidebar' : 'hide-menu'}>
                            <div className="middle-sidebar">
                                <ul className="sidebar-list">
                                    <li className="sidebar-list-item active">
                                        <a href="#" class="sidebar-link">
                                            <svg class="sidebar-icon" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" ><g ><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"></path></g></svg>
                                            <div class="hidden-sidebar">홈</div>
                                        </a>
                                    </li>

                                    <li className="sidebar-list-item">
                                        <a href="#" class="sidebar-link">
                                            <svg viewBox="0 0 24 24" class="sidebar-icon" preserveAspectRatio="xMidYMid meet" focusable="false"><g><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l6 4.5-6 4.5z"></path></g></svg>
                                            <div class="hidden-sidebar">탐색</div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </aside>

                <main>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex rem ipsum porro delectus ipsa placeat modi aut non blanditiis, consequatur earum provident atque quaerat. Sint veniam facere minima nostrum exercitationem sit iste placeat iure non officia adipisci porro similique dolorum vero temporibus corrupti, incidunt, fugit recusandae. Eos voluptas ipsam reprehenderit fugit ad obcaecati ipsum ratione officiis ipsa. Voluptas nam modi, commodi rerum repellendus quae amet, illum expedita esse quis officiis impedit cumque deserunt ipsum asperiores corrupti nulla repudiandae atque mollitia soluta sit ea? A ratione voluptatem sapiente excepturi possimus, ad, atque repellat iusto, architecto iste commodi ut? Cupiditate aliquid quae ad quaerat maxime, ut recusandae perferendis tempore itaque reiciendis fugiat, odio ea vero non illo voluptatibus laborum! Dolore molestias ab hic? Dolorem, eveniet dolores non at voluptatum laudantium recusandae sapiente reprehenderit soluta maxime provident vero vel maiores aperiam ullam eum necessitatibus quibusdam? Corrupti necessitatibus corporis et, dolore reiciendis dolorum dolor earum recusandae incidunt optio nostrum accusantium? Dignissimos et modi adipisci illo labore rerum! Sed libero doloremque repellendus quaerat iste veniam, error adipisci sint porro exercitationem obcaecati eum, perspiciatis illo aliquam enim debitis assumenda reiciendis architecto repudiandae sequi velit! Quos ad enim sapiente autem incidunt debitis. Quaerat nam praesentium, beatae iste vel consectetur doloremque laboriosam asperiores hic nobis assumenda laudantium amet illum, repellat facere enim sequi reprehenderit at et! Expedita blanditiis nulla vitae corporis pariatur eius tenetur fuga, natus cumque autem similique soluta voluptate excepturi esse dolores deleniti ducimus illo exercitationem! Suscipit perferendis debitis ad reiciendis nesciunt, maxime magni labore fugiat soluta perspiciatis commodi, veniam illo nihil magnam exercitationem at, itaque consectetur unde modi accusantium similique. Cum fugit maiores enim, tempora culpa aliquam accusamus debitis consequuntur libero, sed voluptate distinctio voluptatum impedit praesentium incidunt? Placeat laboriosam sunt tenetur quod beatae eum unde error eos repellat! Eaque eius rerum porro dolore, cupiditate quisquam vel. Ipsam, quos accusantium incidunt fugit explicabo minus aliquid sed ullam sapiente, quo facilis dolorem excepturi sunt nam corporis, amet perferendis repellat eum reprehenderit! Autem cum alias veritatis consequuntur harum aspernatur culpa, aliquid voluptas natus in repellendus at rem tenetur praesentium dolores, et minima. Doloribus reprehenderit fugiat dolores tempora repudiandae id officiis aperiam, a quaerat alias corrupti praesentium totam in obcaecati aspernatur aliquid odio velit quo necessitatibus, maiores veritatis quidem nisi recusandae! Accusantium non dolorem natus eaque dicta sed impedit esse sit obcaecati laudantium dolore magni, excepturi cum amet perspiciatis! Dolor cumque excepturi voluptas tenetur! Accusamus, officia amet unde eos sit est sapiente neque nobis quos rerum accusantium, debitis quisquam obcaecati? Sit provident sint dolore ipsum voluptas modi aut eligendi quibusdam natus est ex quasi culpa, iste iure enim quisquam vero dicta aspernatur. Placeat harum dolores sapiente porro ut. Iusto, dolores earum sed perferendis, illum aliquam est necessitatibus, nesciunt laborum sunt exercitationem nostrum blanditiis neque suscipit ipsam? Quas ea dicta nihil, natus necessitatibus blanditiis praesentium iure consequuntur voluptatem perferendis, neque iusto commodi officia minima ipsa eligendi tempora laborum tenetur, quaerat atque fugit accusantium minus impedit. Quaerat impedit officiis odit aliquam animi, magni delectus eius sunt fuga. Ipsa doloremque doloribus eveniet iusto velit quod repellat tenetur consequatur aliquid sapiente beatae voluptates quaerat fugit ratione odio sint, adipisci earum obcaecati quisquam. Ratione similique tempora cumque eos ducimus sunt veritatis eius distinctio maxime rerum aut voluptatibus temporibus, eum cum ex neque sint non facere, eligendi officia. Consequuntur reprehenderit, ipsa ex quod necessitatibus ratione nemo illo doloremque saepe perferendis cupiditate praesentium consectetur provident totam inventore exercitationem, dolorem accusantium debitis voluptates amet sunt odit. At reprehenderit illum, sed fuga a cupiditate amet dolorem, non eos nobis eaque recusandae facere saepe esse. Magnam incidunt, eveniet ipsa et, ea assumenda in repudiandae omnis itaque voluptatum quibusdam atque, reprehenderit totam quis saepe quod obcaecati cumque ratione perferendis eaque corporis doloremque! Sed maiores iure aliquam unde similique amet eveniet sapiente cupiditate, deserunt quia repudiandae, voluptates numquam ipsa cumque perspiciatis facilis tempora! Esse consectetur modi libero incidunt tenetur, nisi voluptas quasi ratione eligendi nostrum itaque, excepturi veritatis delectus. Vero dolorum optio accusantium, quaerat aut iure beatae explicabo quas amet dolores cupiditate eveniet magni facere, vel consectetur repudiandae nesciunt voluptates consequatur ad facilis distinctio neque blanditiis illum unde! Est sit consectetur delectus quos labore! Eius expedita hic repellendus. Reprehenderit suscipit fugit cum id vero, consequatur expedita sint quae sit, pariatur aspernatur harum cupiditate debitis tempora magnam quod praesentium autem asperiores. Modi, architecto. Non nostrum sint porro minus itaque neque quas. Minus nihil enim eveniet. Obcaecati error provident id, temporibus molestiae consequuntur cumque odit, consectetur ducimus dolor illum vel illo numquam nam minima quisquam minus debitis eius fuga. Illo culpa id assumenda ipsam? Nemo accusantium quibusdam fugiat adipisci expedita nostrum iste eum quas, animi sequi quaerat sint aspernatur tenetur maiores saepe quidem? Ab reprehenderit cum quae quidem ullam repellendus vel aliquid ipsam veritatis quaerat. Repellendus, recusandae adipisci aperiam est dolorum quos, obcaecati repudiandae optio esse nemo eveniet id accusantium maxime architecto. Praesentium corporis architecto, pariatur fugit quam ducimus exercitationem a sit et cupiditate facere est eum ipsa ut illo. Corrupti eum id quo quisquam. Sequi eaque veniam quam fuga error explicabo, distinctio beatae quasi doloribus consequuntur maxime. Libero inventore labore in obcaecati doloribus voluptas facilis cumque atque voluptatem magnam ex tempore, necessitatibus corporis, velit ut modi eligendi, qui explicabo eaque sit cum illum. Ipsum delectus numquam quisquam adipisci velit ad laboriosam cum ab. Saepe at perspiciatis ratione nostrum ipsam voluptas incidunt inventore libero dolores blanditiis nemo, eos esse earum neque recusandae? Ab quidem temporibus similique commodi asperiores tempore reprehenderit accusamus. Reiciendis suscipit ullam alias sint impedit labore laudantium vel. Ratione, sequi quam? Adipisci quidem doloribus dignissimos omnis ad optio ex, numquam aperiam aut rerum, sequi dolorum natus tempora quis? Assumenda corrupti reprehenderit rerum aut eos numquam optio unde necessitatibus omnis perferendis iusto, perspiciatis quis eaque possimus asperiores veniam placeat temporibus eveniet ratione minima pariatur sequi! Neque doloremque sunt dolor repudiandae, similique asperiores. Totam, ipsum cupiditate! Facere quidem aliquid illum magni deleniti at et necessitatibus tempora. Suscipit iusto, odit alias distinctio aspernatur voluptates, eveniet, ipsam ducimus nam harum ad iste? Molestias odit distinctio aspernatur odio obcaecati perferendis maxime, excepturi et explicabo sed?
                </main>
            </div>
        </header>
    );
}

export default Header;

