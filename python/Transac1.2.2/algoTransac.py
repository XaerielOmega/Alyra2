import list

class Transaction:

    def __init__(self, taille, gain):
        self.taille = taille
        self.gain = gain
        self.coeff = gain / taille

    def get_taille(self):
        return self.taille

    def get_gain(self):
        return self.gain

    def get_coeff(self):
        return self.coeff


# sur une échantillon de 10, 20, 100 ou 1000 transaction, ici 8:
transacs_full = []
transacs_under = []

for i in range(0, 7):
    transaction_input = input("Entrer une transaction sous la forme: taille-gain >>>").split("-")
    # pourais aussi bien lire un flux.
    transacs = Transaction(int(transaction_input[0]), int(transaction_input[1]))
    if transacs.taille == 6000:
        transacs_full.append(transacs)
    elif transacs < 6000:
        transacs_under.append()
    else:
        print("transaction non conforme")



