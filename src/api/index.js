//导出配置好的axios
import  axios from  'axios'
import auth from '@/utils/auth'

axios.defaults.baseURL='http://ttapi.research.itcast.cn/mp/v1_0/'


//请求拦截器
axios.interceptors.request.use(config=>{
  const user = auth.getUser()
  if (user.token) config.headers.Authorization = `Bearer ${user.token}`
  return config
},
error=> {
  return Promise.reject(error)
})


//响应拦截器
axios.interceptors.response.use(res => {
return res;
},err => {
if(err.response&& err.response.status===401){
  router.push('/login')
}
return Promise.reject(err)
});

export default axios