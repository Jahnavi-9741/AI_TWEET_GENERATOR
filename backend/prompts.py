def build_prompt(data):
    brand_name = data.brand_name
    industry = data.industry
    objective = data.objective
    description = data.product_description

    prompt = f"""
You are a social media strategist.

Analyze the brand voice and generate tweets.

Brand Name: {brand_name}
Industry: {industry}
Campaign Objective: {objective}
Product Description: {description}

First determine the brand voice summary including:
- Tone
- Target audience
- Content themes
- Communication style

Then generate 10 tweets that match this brand voice.

Rules:
- Tweets must be under 280 characters
- Mix engaging, promotional, witty, and informative tweets
- Maintain consistent brand voice

Return response strictly in JSON format like this:

{{
  "summary": {{
    "tone": "",
    "audience": "",
    "themes": "",
    "style": ""
  }},
  "tweets": [
    {{"id":1,"text":""}},
    {{"id":2,"text":""}}
  ]
}}
"""
    return prompt