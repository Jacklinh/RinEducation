import styles from './Object.module.css';
import { BiLogoReact } from "react-icons/bi";
const Object = () => {
  return (
    <section className={styles.sec_object}>
        <div className="container">
            <div className="flex flex-wrap gap-[20px]">
                <div className={styles.object_heading}>
                    <h2 className='heading2'>Đối tượng tham gia khóa học</h2>
                </div>
                <div className={styles.object_cnt}>
                    <ul>
                        <li>
                            <div className={`${styles.object_item} shadow-md`}>
                                <BiLogoReact />
                                <p>Những bạn chưa có kiến thức chuyên môn có mong muốn và yêu thích lập trình</p>
                            </div>
                        </li>
                        <li>
                            <div className={`${styles.object_item} shadow-md`}>
                                <BiLogoReact />
                                <p>Sinh viên Công nghệ thông tin chuẩn bị đi xin việc, cần ôn tập và nâng cao kiến thức để phù hợp với công ty tuyển dụng</p>
                            </div>
                        </li>
                        <li>
                            <div className={`${styles.object_item} shadow-md`}>
                                <BiLogoReact />
                                <p>Sinh viên Công nghệ thông tin cần chuẩn hóa và cập nhật kiến thức mới nhất.</p>
                            </div>
                        </li>
                        <li>
                            <div className={`${styles.object_item} shadow-md`}>
                                <BiLogoReact />
                                <p>Người đã và đang làm việc trong lĩnh vực công nghệ thông tin có quan tâm và mong muốn học thêm ngôn ngữ lập trình mới.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Object