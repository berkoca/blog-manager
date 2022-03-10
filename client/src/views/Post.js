import { useEffect, useState } from "react"
import { Navbar, Card, CardBody, CardText, CardHeader, CardTitle, CardLink } from "reactstrap"
import { Sun, Moon, ArrowLeft } from 'react-feather'
import axios from "../utility/axios"
import classnames from "classnames"
import { useSkin } from '@hooks/useSkin'
import moment from "moment"
import { useHistory } from "react-router-dom"

const Post = (props) => {
  const [post, setPost] = useState({})
  const [user, setUser] = useState({})
  const [category_tags, setCategoryTags] = useState({})
  const [skin, setSkin] = useSkin()
  const history = useHistory()

  useEffect(() => {
    axios.get(`/api/posts/${props.match.params.id}`)
      .then(response => {
        if (response && response.data && response.data.data) {
          setPost(response.data.data)
          setUser(response.data.data.user_id)
          setCategoryTags(response.data.data.category_tags)
        }
      }).catch(error => console.log(error))
  }, [])

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
            
          </div>
        </div>
      </Navbar >
      <Card>
        <CardHeader>
          <CardTitle>
            <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
              <span onClick={() => history.goBack()} style={{ display: "flex", alignItems: "center", fontWeight: "400", cursor: "pointer" }}>
                <ArrowLeft style={{ marginRight: "3px" }} size={22}/> Go back
              </span>
            </div>
            <h1>
              {post.title}
            </h1>
          </CardTitle>
        </CardHeader>
        <CardBody>
          <div style={{ display: "flex", alignItems: "center", height: "100%", marginBottom: "10px" }}>
            <img style={{ width: "100%", borderRadius: "7px" }} src={`https://blog.berkoca.com/public/${post.image_path}`}></img>
          </div>
          <div dangerouslySetInnerHTML={{ __html: post.summary || "No summary." }}></div>
          <CardText>
            {category_tags.length ? category_tags.map(category_tag => {
              return (
                <CardLink key={category_tag} href='' target='_blank'>
                  {category_tag}
                </CardLink>
              )
            }) : ""}
          </CardText>
          <hr />
          <div dangerouslySetInnerHTML={{ __html: post.content || "No content." }}></div>
          <hr />
          <CardText style={{ fontWeight: "600", fontSize: 14 }}><span style={{ opacity: 0.7 }}>by</span> {user.fullname} <span style={{ opacity: 0.7 }}>at</span> {moment(post.createdAt).format("DD/MM/YYYY HH:mm")}</CardText>
        </CardBody>
      </Card>
    </div>
  )
}

export default Post
