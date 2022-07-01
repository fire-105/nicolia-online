import './index.scss';
export default function NotFound() {
	return (
		<div className='not-found--container'>
			<img className='not-found--img' src={require('@/assets/images/404/404.gif')} alt='' />
		</div>
	);
}
