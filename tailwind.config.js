/** @type {import('tailwindcss').Config} */

export default {
	darkMode: ["class"],
	content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
	theme: {
		container: {
			center: true,
			padding: '15px',
			screens: {
				'2xl': '1440px'
			}
		},
		extend: {
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				card: {
					DEFAULT: 'var(--card)',
					foreground: 'var(--card-foreground)'
				},
				popover: {
					DEFAULT: 'var(--popover)',
					foreground: 'var(--popover-foreground)'
				},
				primary: {
					DEFAULT: 'var(--primary)',
					foreground: 'var(--primary-foreground)'
				},
				secondary: {
					DEFAULT: 'var(--secondary)',
					foreground: 'var(--secondary-foreground)'
				},
				muted: {
					DEFAULT: 'var(--muted)',
					foreground: 'var(--muted-foreground)'
				},
				accent: {
					DEFAULT: 'var(--accent)',
					foreground: 'var(--accent-foreground)'
				},
				destructive: {
					DEFAULT: 'var(--destructive)',
					foreground: 'var(--destructive-foreground)'
				},
				green: {
					DEFAULT: 'var(--green)',
					foreground: 'var(--green-foreground)'
				},
				border: 'var(--border)',
				input: 'var(--input)',
				ring: 'var(--ring)',
				chart: {
					'1': 'var(--chart-1)',
					'2': 'var(--chart-2)',
					'3': 'var(--chart-3)',
					'4': 'var(--chart-4)',
					'5': 'var(--chart-5)'
				}
			},
			spacing: {
				'7.5': '30px',
				'15': '60px',
				'25': '100px',
				'30': '120px'
			},
			fontFamily: {
				salsa: 'var(--salsa)',
				italianno: 'var(--italianno)'
			},
			fontSize: {
				xs: [
					'0.75rem',
					{
						lineHeight: 'normal'
					}
				],
				sm: [
					'0.875rem',
					{
						lineHeight: 'normal'
					}
				],
				base: [
					'1rem',
					{
						lineHeight: 'normal'
					}
				],
				lg: [
					'1.125rem',
					{
						lineHeight: 'normal'
					}
				],
				xl: [
					'1.25rem',
					{
						lineHeight: 'normal'
					}
				],
				'2xl': [
					'1.5rem',
					{
						lineHeight: 'normal'
					}
				],
				'3xl': [
					'1.875rem',
					{
						lineHeight: 'normal'
					}
				],
				'4xl': [
					'2.25rem',
					{
						lineHeight: 'normal'
					}
				],
				'5xl': [
					'3rem',
					{
						lineHeight: 'normal'
					}
				],
				'6xl': [
					'3.75rem',
					{
						lineHeight: 'normal'
					}
				],
				'7xl': [
					'4.5rem',
					{
						lineHeight: 'normal'
					}
				],
				'8xl': [
					'6rem',
					{
						lineHeight: 'normal'
					}
				],
				'9xl': [
					'8rem',
					{
						lineHeight: 'normal'
					}
				]
			},
			lineHeight: {
				normal: 'normal'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: 
		[]
	,
}