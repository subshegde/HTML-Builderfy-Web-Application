
<!DOCTYPE html>
<html lang="en" >
<head>
  <meta charset="UTF-8">
  <title>login form</title>
  <link rel="stylesheet" href="{{asset('frontend/style.css')}}">
  <link rel="stylesheet" href="{{asset('frontend/a.css')}}">
  <link rel="stylesheet" href="{{asset('frontend/bird.css')}}">
  <link rel="stylesheet" href="{{asset('frontend/login.css')}}">
</head>
<body>
  <img src="{{asset('frontend/img/deer.jpg.webp')}}">

  
<!-- bird -->
<!-- bird -->
<div class="con" id="con">
  <div class="bird-container bird-container--one">
    <div class="bird bird--one"></div>
  </div>
  
  <div class="bird-container bird-container--two">
    <div class="bird bird--two"></div>
  </div>
  
  <div class="bird-container bird-container--three">
    <div class="bird bird--three"></div>
  </div>

  <div class="bird-container bird-container--four">
    <div class="bird bird--four"></div>
  </div>
</div>
<!-- form -->
<section>
    <div class="container">
        <div class="form">
            <h2>Login Form </h2>


            <form action="{{route('login')}}" method="post">
              @csrf 
              
                <div class="inputBox">
                    <input type="text" name="username" placeholder="username" >
                    <span class="text-danger"><h6>
                    @error('username')
                        {{$message}}
                      @enderror
                    @if(Session::has('error'))
                      {{ Session::get('error')}}
                    @endif
                    </h6>
                    </span>
                      
                </div>
                <div class="inputBox">
                    <input type="password" name="password" placeholder="password" >
                    <span class="text-danger"><h6>
                      @error('password')
                        {{$message}}
                      @enderror
                       </h6>
                    </span>
                </div>
                <div class="inputBox"> 
                    <input type="submit" name="submit" value="Login">
                </div>
                <p class="forget1">Don't have an account ?<a href="{{url('/signup')}}">Sign up</a></p>
                <p class="forget-1">Back to !<a href="{{url('/index1')}}">Home page</a></p>
            </form>
            </div>
        </div>
    </section>
    <script src='https://codepen.io/juliangarnier/pen/oxJyOr/4032af61ca0478304ab7b31b70a44804.js'></script>
</body>
</html>
