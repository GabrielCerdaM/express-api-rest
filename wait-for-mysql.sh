#!/bin/bash

# Esperar a que MySQL esté disponible
echo "Esperando a que MySQL esté disponible en ${DB_HOST}:${DB_PORT}..."
while ! nc ping -h"$DB_HOST" -P"$DB_PORT" --silent; do
    sleep 1
done

echo "MySQL está disponible."

# Ejecutar la aplicación
exec "$@"