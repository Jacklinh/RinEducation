import React from 'react'
import styles from './Hero.module.css'
const Hero = () => {
    return (
        <section className={styles.sec_hero}>
            <div className="container">
                <div className="flex flex-wrap gap-[20px]">
                    <div className={`${styles.hero_cnt}`}>
                        <h1 className='heading1'>Lập trình Web Front-End với HTML5, CSS3, JS và ReactJs</h1>
                        <p className={styles.hero_desc}>Khóa học Lập trình Web Front-End là việc sử dụng các ngôn ngữ HTML, CSS hay ngôn ngữ lập trình Javascript để các lập trình viên thiết kế ra các giao diện ứng dụng hoặc trang web cho người dùng. Những gì bạn nhìn thấy, “chạm”, “lướt”, tương tác trên màn hình chính là kết quả của lập trình Front End và là thành của của Front End Developer.</p>
                        <p className={styles.btn_action}>
                            <a href="">Đăng ký tư vấn</a>
                        </p>
                    </div>
                    <div className={`${styles.hero_image}`}>
                        <div className={styles.hero_image_inner}>
                            <div className={styles.hero_logo}>
                                <img src="/images/laptrinh.jpg" alt="" />
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero