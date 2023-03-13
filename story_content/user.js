function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6Y4BYJXq8Jl":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbxLRujthNkKlo45bF3i9ZMAsf8EPULbOgveJZl9pCqpXahkXJSHZgQvTvH20Z4uZsj5nw/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

