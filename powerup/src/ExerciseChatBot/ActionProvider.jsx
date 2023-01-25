class ActionProvider {
  constructor(
    createChatBotMessage,
    setStateFunc,
    createClientMessage,
    stateRef,
    createCustomMessage,
    ...rest
  ) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
    this.stateRef = stateRef;
    this.createCustomMessage = createCustomMessage;
  }

  ResponseHandler = (message) => {
    let prompt = `My weight is ${localStorage.getItem("weight")}kg and my height is ${localStorage.getItem("height")}cm. Today, my total calories intake is ${localStorage.getItem("calories")} calories, my protein intake is ${localStorage.getItem("protein")} grams and my fats intake ${localStorage.getItem("fats")} grams. I burned ${localStorage.getItem("cal24h")} in the past 24hours. I am trying to reach ${localStorage.getItem("weightGoal")}kg. 
${localStorage.getItem("condition")==''?'I have '+localStorage.getItem("condition"):''}

Suggest me some exercises for my ${message} based on my weight and height`
    console.log(prompt)
      fetch('https://api.openai.com/v1/engines/text-davinci-003/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer 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`
        },
        body: JSON.stringify({
          prompt: prompt,
          max_tokens: 512
        })
      })
        .then(response => response.json())
        .then(data => {
          console.log(data.choices[0].text)
          this.setChatbotMessage(this.createChatBotMessage(data.choices[0].text))
        })
    }
    setChatbotMessage = (message) => {
      this.setState(state => ({ ...state, messages: [...state.messages, message] }))
    }
  }

export default ActionProvider;