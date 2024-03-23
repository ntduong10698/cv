const PERFIX_PRINT_THIS = "/cv/";
const TIME_ALERT = 2000;
const INFOR_PRODUCT_PRIVATE_VN = "Sản phẩm chỉ được sử dụng trong nội bộ.";
const INFOR_PRODUCT_PRIVATE_EN = "Product is for internal use only."; 
const INFOR_CV_VN = {
    imgCV: 'public/img-cv.jpg',
    name: 'Nguyễn Trọng Dương',
    job: 'Software Developer',
    contacts: [
        {
            icon: '<i class="fas fa-mobile-alt"></i>',
            value: '0966186222',
            href: 'tel:0966186222'
        },
        {
            icon: '<i class="fas fa-mobile-alt"></i>',
            value: '0368565660',
            href: 'tel:0368565660'
        },
        {
            icon: '<i class="far fa-envelope"></i>',
            value: 'ntduong10698@gmail.com',
            href: 'mailto:ntduong10698@gmail.com'
        },
        {
            icon: '<i class="fab fa-facebook-square"></i>',
            value: 'facebook.com/duong.nguyentrong.52',
            href: 'https://www.facebook.com/duong.nguyentrong.52'
        },
        {
            icon: '<i class="fab fa-github"></i>',
            value: 'github.com/ntduong10698',
            href: 'https://github.com/ntduong10698'
        },
        {
            icon: '<i class="fa-brands fa-linkedin"></i>',
            value: 'linkedin.com/in/ntduong10698/',
            href: 'https://www.linkedin.com/in/ntduong10698/'
        }
    ],
    skills: [
        {
            icon: '<i class="fab fa-html5"></i>',
            value: 'HTML'
        },
        {
            icon: '<i class="fab fa-css3-alt"></i>',
            value: 'CSS'
        },
        {
            icon: '<i class="fab fa-js"></i>',
            value: 'JavaScript/Jquery'
        },
        {
            icon: '<i class="fab fa-bootstrap"></i>',
            value: 'Bootstrap 3.x/4.x'
        },
        {
            icon: '<i class="fab fa-java"></i>',
            value: 'Java Core/JSP/Servlet'
        },
        {
            icon: '<i class="fas fa-leaf"></i>',
            value: 'Spring Framework'
        },
        {
            icon: '<i class="fas fa-database"></i>',
            value: 'SQL Server/MySQL/MariaDB/Oracle'
        },
        {
            icon: '<i class="fa-brands fa-docker"></i>',
            value: 'Docker'
        },
        {
            icon: '<i class="fa-brands fa-searchengin"></i>',
            value: 'Elasticsearch'
        },
        {
            icon: '<i class="fa-solid fa-dharmachakra"></i>',
            value: 'Kubernetes'
        },
        {
            icon: '<i class="fa-brands fa-ubuntu"></i>',
            value: 'Ubuntu'
        }
    ],
    descriptionCV: 'Tôi là Nguyễn Trọng Dương. Hiện tại tôi là một Software Developer. Trước đấy tôi đã tốt nghiệp cử nhân đại học Bách Khoa Hà Nội và từng tham gia giảng dạy ngôn ngữ lập trình java tại câu lạc bộ ITStudent. Với các kinh nghiệm từng bước triển khai một hệ thống website từ bước phân tích yêu cầu khách hàng cho đến khi sản phẩm được triển khai, cùng với tinh thần học hỏi, trách nhiệm trong công việc tôi hy vọng sẽ được làm việc cùng với anh/chị góp phần nhỏ vào sự phát triển của công ty.',
    experiences: [
        {
            name: 'Camera Hà Phát',
            company: 'BK Software Viet Nam., JSC',
            description: 'Webiste bán hàng cho phép khách hàng tìm hiểu và đặt mua các thiết bị camera.',
            info: [
                {
                    name: 'Quy mô dự án',
                    value: '2 người.' 
                },
                {
                    name: 'Vị trí/ Trách nhiệm',
                    value: 'Phát triển/ Tạo cấu trúc, Triển khai.'
                },
                {
                    name: 'Công nghệ sử dụng',
                    value: 'MySQL, Spring Framework, HTML, CSS, JS.'
                }
            ]
        },
        {
            name: 'Quy hoạch sử dụng đất và giá đất',
            company: 'TAVI CID CO.,LTD',
            description: 'Dự án chuyển đổi dữ liệu số và cung cấp chức năng quản lý các thông tin về quy hoạch sử dụng đất và giá đất trên nền tảng Web. Dự án có sử dụng WebGIS để hiện thị bản đồ quy hoạch đất và các thông tin liên quan.',
            info: [
                {
                    name: 'Quy mô dự án',
                    value: '4 người.' 
                },
                {
                    name: 'Vị trí/ Trách nhiệm',
                    value: 'Phát triển, Trưởng nhóm/ Phân tích, Tạo cấu trúc, Triển khai.'
                },
                {
                    name: 'Công nghệ sử dụng',
                    value: 'Spring framework, HTML, CSS, JS, ArgGIS, WebGIS, SQL Server.'
                }
            ]
        },
        {
            name: 'Natalie PMU',
            company: 'BK Software Viet Nam., JSC',
            description: 'Website cung cấp các thông tin, khóa học online và offline, bài báo và sự kiện về thẩm mỹ.',
            info: [
                {
                    name: 'Quy mô dự án',
                    value: '4 người.' 
                },
                {
                    name: 'Vị trí/ Trách nhiệm',
                    value: 'Phát triển/ Tạo cấu trúc, Triển khai.'
                },
                {
                    name: 'Công nghệ sử dụng',
                    value: 'Spring framework, HTML, CSS, JS, MySQL.'
                }
            ]
        },
        {
            name: 'Thiết bị điện AVHH',
            company: 'BK Software Viet Nam., JSC',
            description: 'Website cho phép khách hàng tìm kiếm thông và đặt mua các thiết bị điện. Cung cấp thông tin các dự án của công ty và tin tức về thiết bị điện.',
            info: [
                {
                    name: 'Quy mô dự án',
                    value: '4 người.' 
                },
                {
                    name: 'Vị trí/ Trách nhiệm',
                    value: 'Phát triển/ Tạo cấu trúc, Triển khai.'
                },
                {
                    name: 'Công nghệ sử dụng',
                    value: 'Spring framework, HTML, CSS, JS, MySQL.'
                }
            ]
        },
        {
            name: 'Đông Y Đỗ Mười',
            company: 'BK Software Viet Nam., JSC',
            description: 'Website cung cấp thông tin về các sản phẩm, bài báo, nghiên cứu, tài liệu về đông y.',
            info: [
                {
                    name: 'Quy mô dự án',
                    value: '4 người.' 
                },
                {
                    name: 'Vị trí/ Trách nhiệm',
                    value: 'Phát triển/ Tạo cấu trúc, Triển khai.'
                },
                {
                    name: 'Công nghệ sử dụng',
                    value: 'Spring framework, HTML, CSS, JS, MySQL.'
                }
            ]
        },
        {
            name: 'Quản lý công việc',
            company: 'TỔNG CÔNG TY GIẢI PHÁP DOANH NGHIỆP VIETTEL',
            description: 'Website quản lý thông tin khách hàng và công việc của nhân viên.',
            info: [
                {
                    name: 'Quy mô dự án',
                    value: '2 người.' 
                },
                {
                    name: 'Vị trí/ Trách nhiệm',
                    value: 'Phát triển/ Tạo cấu trúc, Triển khai.'
                },
                {
                    name: 'Công nghệ sử dụng',
                    value: 'Spring framework, HTML, CSS, JS, MySQL.'
                }
            ]
        },
        {
            name: 'Sản phẩm thẻ',
            company: 'TPBank',
            description: 'Cung cấp và phát triển các dịch vụ thẻ cho khách hàng cá nhân và doanh nghiệp.',
            info: [
                {
                    name: 'Quy mô dự án',
                    value: '10 người.' 
                },
                {
                    name: 'Vị trí/ Trách nhiệm',
                    value: 'Phát triển/ Tạo cấu trúc, Triển khai.'
                },
                {
                    name: 'Công nghệ sử dụng',
                    value: 'Spring framework, Backbase, Docker, Oracle.'
                }
            ]
        },
        {
            name: 'MyViettel',
            company: 'Viettel Telecom',
            description: 'Ứng dụng thông minh hỗ trợ các tiên ích cho người dùng mạng Viettel',
            info: [
                {
                    name: 'Quy mô dự án',
                    value: '10 người.' 
                },
                {
                    name: 'Vị trí/ Trách nhiệm',
                    value: 'Phát triển/ Tạo cấu trúc, Triển khai.'
                },
                {
                    name: 'Công nghệ sử dụng',
                    value: 'Spring framework, Webflux, Docker, Kubernetes, MariaDB, Elasticsearch, Firebase, Giblab CI/CD.'
                }
            ]
        },
        {
            name: 'AutoPay',
            company: 'Viettel Telecom',
            description: 'Gạch nợ, nạp tiền tự dộng cho các thuê bao Viettel, qua các cổng thanh toán VNPay, ViettelPay, Momo, ATM....',
            info: [
                {
                    name: 'Project size',
                    value: '10 people.' 
                },
                {
                    name: 'Position/ Responsibilities',
                    value: 'Analysis, Developer/ Create prototype, Implement.'
                },
                {
                    name: 'Used Technologies',
                    value: 'Spring framework, Oracle, Kafka.'
                }
            ]
        }
    ],
    products: [
        {
            img: './public/product/haphat.PNG',
            name: 'Camera Hà Phát',
            description: 'Website bán camera',
            href: 'https://haphatsmarthome.com/'
        },
        {
            img: './public/product/quyhoachbacgiang.png',
            name: 'Quy hoạch sử dụng đất và giá đất',
            description: 'Website nội bộ về quản lý quy hoạch sử dụng đất và giá đất',
            href: ''
        },
        {
            img: './public/product/nataliepmu.PNG',
            name: 'Natalie PMU',
            description: 'Website dịch vụ thẩm mỹ',
            href: 'https://nataliepmu.com/'
        },
        {
            img: './public/product/theitbidienavhh.PNG',
            name: 'AVHH',
            description: 'Thiết bị điện AVHH',
            href: 'https://thietbidienavhh.com/'
        },
        {
            img: './public/product/dongydomuoi.PNG',
            name: 'Đỗ Mười',
            description: 'Đông Y Đỗ Mười',
            href: 'https://dev.bksoftwarevn.com/dongydomuoi_com/'
        }
    ]
}

const INFOR_CV_EN = {
    imgCV: 'public/img-cv.jpg',
    name: 'Nguyen Trong Duong',
    job: 'Software Developer',
    contacts: [
        {
            icon: '<i class="fas fa-mobile-alt"></i>',
            value: '0966186222',
            href: 'tel:0966186222'
        },
        {
            icon: '<i class="far fa-envelope"></i>',
            value: 'ntduong10698@gmail.com',
            href: 'mailto:ntduong10698@gmail.com'
        },
        {
            icon: '<i class="fab fa-facebook-square"></i>',
            value: 'facebook.com/duong.nguyentrong.52',
            href: 'https://www.facebook.com/duong.nguyentrong.52'
        },
        {
            icon: '<i class="fab fa-github"></i>',
            value: 'github.com/ntduong10698',
            href: 'https://github.com/ntduong10698'
        },
        {
            icon: '<i class="fa-brands fa-linkedin"></i>',
            value: 'linkedin.com/in/ntduong10698/',
            href: 'https://www.linkedin.com/in/ntduong10698/'
        }
    ],
    skills: [
        {
            icon: '<i class="fab fa-html5"></i>',
            value: 'HTML'
        },
        {
            icon: '<i class="fab fa-css3-alt"></i>',
            value: 'CSS'
        },
        {
            icon: '<i class="fab fa-js"></i>',
            value: 'JavaScript/ Jquery'
        },
        {
            icon: '<i class="fab fa-bootstrap"></i>',
            value: 'Bootstrap 3.x/4.x'
        },
        {
            icon: '<i class="fab fa-java"></i>',
            value: 'Java Core/ JSP/ Servlet'
        },
        {
            icon: '<i class="fas fa-leaf"></i>',
            value: 'Spring Framework'
        },
        {
            icon: '<i class="fas fa-database"></i>',
            value: 'SQL Server/ MySQL/ MariaDB'
        },
        {
            icon: '<i class="fa-brands fa-docker"></i>',
            value: 'Docker'
        },
        {
            icon: '<i class="fa-brands fa-searchengin"></i>',
            value: 'Elasticsearch'
        },
        {
            icon: '<i class="fa-solid fa-dharmachakra"></i>',
            value: 'Kubernetes'
        },
        {
            icon: '<i class="fa-brands fa-ubuntu"></i>',
            value: 'Ubuntu'
        }
    ],
    descriptionCV: 'My name is Nguyen Trong Duong. Currently, I am a Software Developer. I graduated from Hanoi University of Science and Technology and participated in teaching Java programming language at the club ITStudent. With the experience of implementing a website system from analysis of customer requirements to the product is deployed and the spirit of learning and responsibility at work, I hope to be working with you makes a small contribution to the development of the company.',
    experiences: [
        {
            name: 'Ha Phat Camera',
            company: 'BK Software Viet Nam., JSC',
            description: 'The Project about selling web allows customers can find out and order about camera equipment.',
            info: [
                {
                    name: 'Project size',
                    value: '2 people.' 
                },
                {
                    name: 'Position/ Responsibilities',
                    value: 'Developer/ Create prototype, Implement.'
                },
                {
                    name: 'Used Technologies',
                    value: 'Spring framework, HTML, CSS, JS, MySQL.'
                }
            ]
        },
        {
            name: 'Manage land use planning information and land prices',
            company: 'TAVI CID CO.,LTD',
            description: 'The Project that converts digital data and provides management functions for land use planning information and land prices. Use the web GIS to display land use planning maps.',
            info: [
                {
                    name: 'Project size',
                    value: '4 people.' 
                },
                {
                    name: 'Position/ Responsibilities',
                    value: 'Developer, Team Leader/ Analysis, Implement, Create prototype.'
                },
                {
                    name: 'Used Technologies',
                    value: 'Spring framework, HTML, CSS, JS, ArgGIS, WebGIS, SQL Server.'
                }
            ]
        },
        {
            name: 'Natalie PMU',
            company: 'BK Software Viet Nam., JSC',
            description: 'The Project about web offers information, online and offline courses, articles and facts about cosmetology.',
            info: [
                {
                    name: 'Project size',
                    value: '4 people.' 
                },
                {
                    name: 'Position/ Responsibilities',
                    value: 'Developer/ Create prototype, Implement.'
                },
                {
                    name: 'Used Technologies',
                    value: 'Spring framework, HTML, CSS, JS, MySQL.'
                }
            ]
        },
        {
            name: 'AVHH Electrical Equipment',
            company: 'BK Software Viet Nam., JSC',
            description: 'The Project about web allows customers to find information and order electrical equipment, provide information project of the company and news about electrical equipment.',
            info: [
                {
                    name: 'Project size',
                    value: '4 people.' 
                },
                {
                    name: 'Position/ Responsibilities',
                    value: 'Developer/ Create prototype, Implement.'
                },
                {
                    name: 'Used Technologies',
                    value: 'Spring framework, HTML, CSS, JS, MySQL.'
                }
            ]
        },
        {
            name: 'Do Muoi Oriental Medicine',
            company: 'BK Software Viet Nam., JSC',
            description: 'The Project about web provides information on oriental medicine products, articles, studies, materials.',
            info: [
                {
                    name: 'Project size',
                    value: '4 people.' 
                },
                {
                    name: 'Position/ Responsibilities',
                    value: 'Developer/ Create prototype, Implement.'
                },
                {
                    name: 'Used Technologies',
                    value: 'Spring framework, HTML, CSS, JS, MySQL.'
                }
            ]
        },
        {
            name: 'Task Manager',
            company: 'Viettel solutions',
            description: 'The Project about web manages customer information and employee task.',
            info: [
                {
                    name: 'Project size',
                    value: '2 people.' 
                },
                {
                    name: 'Position/ Responsibilities',
                    value: 'Developer/ Create prototype, Implement.'
                },
                {
                    name: 'Used Technologies',
                    value: 'Spring framework, HTML, CSS, JS, MySQL.'
                }
            ]
        },
        {
            name: 'Card Product',
            company: 'TPBank',
            description: 'Provide and develop card services for individual and corporate customers.',
            info: [
                {
                    name: 'Project size',
                    value: '10 people.' 
                },
                {
                    name: 'Position/ Responsibilities',
                    value: 'Developer/ Create prototype, Implement.'
                },
                {
                    name: 'Used Technologies',
                    value: 'Spring framework, Backbase, Docker, Oracle.'
                }
            ]
        },
        {
            name: 'MyViettel',
            company: 'Viettel Telecom',
            description: 'Smart application that provides utility for Viettel telecom users',
            info: [
                {
                    name: 'Project size',
                    value: '10 people.' 
                },
                {
                    name: 'Position/ Responsibilities',
                    value: 'Developer/ Create prototype, Implement.'
                },
                {
                    name: 'Used Technologies',
                    value: 'Spring framework, Webflux, Docker, Kubernetes, MariaDB, Elasticsearch, Firebase, Giblab CI/CD.'
                }
            ]
        },
        {
            name: 'AutoPay',
            company: 'Viettel Telecom',
            description: 'Pay debt, phone recharge automatically for Viettel customers, through payment gateways VNPay, ViettelPay, Momo, ATM....',
            info: [
                {
                    name: 'Project size',
                    value: '10 people.' 
                },
                {
                    name: 'Position/ Responsibilities',
                    value: 'Analysis, Developer/ Create prototype, Implement.'
                },
                {
                    name: 'Used Technologies',
                    value: 'Spring framework, Oracle, Kafka.'
                }
            ]
        }
    ],
    products: [
        {
            img: './public/product/haphat.PNG',
            name: 'Ha Phat Camera',
            description: 'Website selling camera',
            href: 'https://haphatsmarthome.com/'
        },
        {
            img: './public/product/quyhoachbacgiang.png',
            name: 'Manage land use planning information and land prices',
            description: 'Internal website manages land use planning and land prices',
            href: ''
        },
        {
            img: './public/product/nataliepmu.PNG',
            name: 'Natalie PMU',
            description: 'Website cosmetology',
            href: 'https://nataliepmu.com/'
        },
        {
            img: './public/product/theitbidienavhh.PNG',
            name: 'AVHH',
            description: 'Website electrical equipment',
            href: 'https://thietbidienavhh.com/'
        },
        {
            img: './public/product/dongydomuoi.PNG',
            name: 'Do Muoi',
            description: 'Website oriental medicine',
            href: 'https://dev.bksoftwarevn.com/dongydomuoi_com/'
        }
    ]
}
