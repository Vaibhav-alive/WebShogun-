import tkinter as tk
from tkinter import messagebox

class ExpenseTrackerApp:
    def __init__(self, root):
        self.root = root
        self.root.title("Expense Tracker")

        self.expenses = []

        # Labels and entry fields for adding expenses
        tk.Label(root, text="Expense Name:").grid(row=0, column=0, sticky="w")
        self.expense_name_entry = tk.Entry(root)
        self.expense_name_entry.grid(row=0, column=1)

        tk.Label(root, text="Amount:").grid(row=1, column=0, sticky="w")
        self.amount_entry = tk.Entry(root)
        self.amount_entry.grid(row=1, column=1)

        tk.Label(root, text="Category:").grid(row=2, column=0, sticky="w")
        self.category_entry = tk.Entry(root)
        self.category_entry.grid(row=2, column=1)

        # Button to add expense
        self.add_button = tk.Button(root, text="Add Expense", command=self.add_expense)
        self.add_button.grid(row=3, column=0, columnspan=2, pady=10)

        # Listbox to display expenses
        self.expense_listbox = tk.Listbox(root, width=50)
        self.expense_listbox.grid(row=4, column=0, columnspan=2)

        # Button to delete selected expense
        self.delete_button = tk.Button(root, text="Delete Expense", command=self.delete_expense)
        self.delete_button.grid(row=5, column=0, columnspan=2, pady=10)

        # Button to generate expense report
        self.report_button = tk.Button(root, text="Generate Report", command=self.generate_report)
        self.report_button.grid(row=6, column=0, columnspan=2, pady=10)

    def add_expense(self):
        name = self.expense_name_entry.get()
        amount = self.amount_entry.get()
        category = self.category_entry.get()

        if name and amount and category:
            try:
                amount = float(amount)
                self.expenses.append({"name": name, "amount": amount, "category": category})
                self.update_expense_listbox()
                self.expense_name_entry.delete(0, tk.END)
                self.amount_entry.delete(0, tk.END)
                self.category_entry.delete(0, tk.END)
            except ValueError:
                messagebox.showerror("Error", "Amount must be a number.")
        else:
            messagebox.showerror("Error", "Please fill out all fields.")

    def delete_expense(self):
        selected_indices = self.expense_listbox.curselection()
        if selected_indices:
            index = selected_indices[0]
            del self.expenses[index]
            self.update_expense_listbox()

    def update_expense_listbox(self):
        self.expense_listbox.delete(0, tk.END)
        for expense in self.expenses:
            self.expense_listbox.insert(tk.END, f"{expense['name']} - ${expense['amount']} - {expense['category']}")

    def generate_report(self):
        total_expenses = sum(expense["amount"] for expense in self.expenses)
        category_totals = {}
        for expense in self.expenses:
            category = expense["category"]
            if category in category_totals:
                category_totals[category] += expense["amount"]
            else:
                category_totals[category] = expense["amount"]

        report = f"Total Expenses: ${total_expenses}\n\nCategory-wise Expenses:\n"
        for category, total in category_totals.items():
            report += f"{category}: ${total}\n"

        messagebox.showinfo("Expense Report", report)

if __name__ == "__main__":
    root = tk.Tk()
    app = ExpenseTrackerApp(root)
    root.mainloop()
