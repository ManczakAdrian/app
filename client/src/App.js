

const App=()=>{
  return(
    <main>
<Container>
  <Header/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/ad/:id" element={<Add/>}/>
    <Route path="/ad/add" element={<AdAdd/>}/>
    <Route path="/ad/edit/:id" element={<AdEdit/>}/>
    <Route path="/ad/romove/:id" element={<AdRemove/>}/>
    <Route path="/search/:searchPhrase" element={<Search/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/logout" element={<Logout/>}/>
    <Route path="*" element={<NotFound/>}/> 
  </Routes>
  <Footer/>
</Container>
    </main>
  );
}
export default App;
