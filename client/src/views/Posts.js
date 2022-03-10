import { Card, CardHeader, CardLink, CardBody, CardTitle, CardText, Navbar, Input, InputGroup } from 'reactstrap'
import '@styles/base/core/menu/menu-types/horizontal-menu.scss'
import { useState, useEffect } from 'react'
import axios from '../utility/axios'
import classnames from 'classnames'
import { useSkin } from '@hooks/useSkin'
import { Sun, Moon } from 'react-feather'
import moment from 'moment'
import FooterComponent from '../@core/layouts/components/footer'
import { useFooterType } from '@hooks/useFooterType'
import { Link } from 'react-router-dom'

const Posts = (props) => {
  const [posts, setPosts] = useState([])
  const [filteredPosts, setFilteredPosts] = useState([])
  const [skin, setSkin] = useSkin()
  const [footerType, setFooterType] = useFooterType()

  // ** Vars
  const footerClasses = {
    static: 'footer-static',
    sticky: 'footer-fixed',
    hidden: 'footer-hidden'
  }

  useEffect(() => {
    axios.get("/api/posts")
      .then(response => {
        if (response && response.data && response.data.data) {
          setPosts(response.data.data)
          setFilteredPosts(response.data.data)
        }
      }).catch(error => console.log(error))
  }, [])

  const search = (e) => {
    const filtered = []

    if (e.target.value) {
      for (const post of posts) {
        if (post.title.toLowerCase().includes(e.target.value) || post.content.toLowerCase().includes(e.target.value)) {
          filtered.push(post)
        } else {
          if (post.category_tags.length) {
            for (const category_tag of post.category_tags) {
              if (category_tag.toLowerCase().includes(e.target.value)) {
                filtered.push(post)
              }
            }
          }
        }
      }
    }

    setFilteredPosts(filtered.length > 0 ? filtered : !e.target.value ? posts : [])
  }

  return (
    <div style={{ padding: "30px" }}>
      <Navbar
        style={{ height: "30px", marginBottom: "20px", borderRadius: "6px" }}
        expand='lg'
        className={classnames('header-navbar navbar-fixed align-items-center navbar-shadow navbar-brand-center')}
      >
        <div className='navbar-container d-flex justify-content-between align-items-center'>
          <div>
            {skin === 'dark' && <Sun className='ficon' style={{ cursor: "pointer" }} onClick={() => setSkin('light')} />}
            {skin !== 'dark' && <Moon className='ficon' style={{ cursor: "pointer" }} onClick={() => setSkin('dark')} />}
          </div>
          <div>
            <h1 style={{ marginBottom: 0, fontWeight: 100 }}>Blog</h1>
          </div>
          <div>
            <InputGroup>
              <Input onChange={search} placeholder="Search..." />
            </InputGroup>
          </div>
        </div>
      </Navbar >
      <div>
        {filteredPosts.length ? filteredPosts.map(post => {
          return (
            <Card key={post.id} style={{ padding: "15px" }}>
              <div style={{ display: "flex" }}>
                <div style={{ width: "20%" }}>
                  <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
                    <img style={{ width: "100%", borderRadius: "7px" }} src={`https://blog.berkoca.com/public/${post.image_path}`}></img>
                  </div>
                </div>
                <div style={{ width: "80%" }}>
                  <CardHeader>
                    <CardTitle>{post.title}</CardTitle>
                  </CardHeader>
                  <CardBody>
                    <CardText dangerouslySetInnerHTML={{ __html: post.summary || "No summary." }}></CardText>
                    <Link to={`/posts/${post.id}`} style={{ borderBottom: "1px solid", fontSize: "12px" }}>Continue reading</Link>
                    <div style={{ marginTop: "30px" }}>
                      <hr/>
                      <CardText>
                        {post.category_tags.length ? post.category_tags.map(category_tag => {
                          return (
                            <CardLink key={category_tag} href='' target='_blank'>
                              {category_tag}
                            </CardLink>
                          )
                        }) : ""}
                      </CardText>
                      <CardText style={{ fontWeight: "600", fontSize: 12 }}><span style={{ opacity: 0.7 }}>by</span> {post.user_id.fullname} <span style={{ opacity: 0.7 }}>at</span> {moment(post.createdAt).format("DD/MM/YYYY HH:mm")}</CardText>
                    </div>
                  </CardBody>
                </div>
              </div>
            </Card>
          )
        }) : "No result found."}
      </div>
      <footer
        className={classnames(`footer-light ${footerClasses[footerType] || 'footer-static'}`, {
          'd-none': footerType === 'hidden'
        })}
      >
        {props.footer ? (
          footer({ footerType, footerClasses })
        ) : (
          <FooterComponent footerType={footerType} footerClasses={footerClasses} />
        )}
      </footer>
    </div >
  )
}

export default Posts
