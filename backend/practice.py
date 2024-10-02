# Question:

# You're tasked with analyzing a dataset containing information about the sales of different products in a retail store.
# The dataset includes columns for product ID, product category, sales quantity, and sales price.

# Write a Python function that:

# Calculates the total revenue for each product category.
# Identifies the product category with the highest total revenue and returns its name.
# Here's a possible approach:


def func(data):
  data['total revenue'] = data['sales quantity'] * data['sales price']
  data.loc[data['total revenue'].idxmax(), 'product category']
